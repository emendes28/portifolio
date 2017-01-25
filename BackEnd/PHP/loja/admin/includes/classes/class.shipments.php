<?php
if (!defined('ISC_BASE_PATH')) {
	die();
}

/**
 * Loja Virtual V2010 Shipment Management.
 */
class ISC_ADMIN_SHIPMENTS
{
	/**
	 * The constructor.
	 */
	public function __construct()
	{
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->LoadLangFile('shipments');
	}

	/**
	 * Handle the incoming action we want to perform.
	 *
	 * @param string The name of the action to perform.
	 */
	public function HandleToDo($do)
	{
		if(!$GLOBALS['ISC_CLASS_ADMIN_AUTH']->HasPermission(AUTH_Manage_Orders)) {
			exit;
		}

		// Initialise custom searches functionality
		require_once(dirname(__FILE__).'/class.customsearch.php');
		$GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH'] = new ISC_ADMIN_CUSTOMSEARCH('shipments');

		// Set up some generic breadcrumb entries as these will be used on most pages
		$GLOBALS['BreadcrumEntries'] = array(
			GetLang('Home') => 'index.php',
			GetLang('Orders') => 'index.php?ToDo=viewOrders',
			GetLang('Shipments') => 'index.php?ToDo=viewShipments'
		);

		switch(strtolower($do)) {
			case 'printshipmentpackingslips':
				$this->PrintShipmentPackingSlips();
				break;
			case 'printorderpackingslips':
				$this->PrintOrderPackingSlips();
				break;
			case 'createshipmentview':
				$this->CreateView();
				break;
			case 'deletecustomshipmentsearch':
				$this->DeleteCustomSearch();
				break;
			case 'customshipmentsearch':
				$this->CustomSearch();
				break;
			case 'searchshipmentsredirect':
				$this->SearchShipmentsRedirect();
				break;
			case 'searchshipments':
				$this->SearchShipments();
				break;
			case 'exportshipments':
				$this->ExportShipments();
				break;
			case 'deleteshipments':
				$this->DeleteShipments();
				break;
			default:
				$this->ManageShipments();
		}
	}

	/**
	 * Get a shipment based on the passed shipment ID.
	 *
	 * @param int The shipment ID to fetch from the database.
	 * @return array An array of details about the fetched shipment.
	 */
	private function GetShipmentById($shipmentId)
	{
		static $shipmentCache;
		if(isset($shipmentCache[$shipmentId])) {
			return $shipmentCache[$shipmentId];
		}

		$query = "
			SELECT *
			FROM [|PREFIX|]shipments
			WHERE shipmentid='".(int)$shipmentId."'
		";
		$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
		$shipmentCache[$shipmentId] = $GLOBALS['ISC_CLASS_DB']->Fetch($result);
		return $shipmentCache[$shipmentId];
	}

	/**
	 * Print one or more packing slips for orders.
	 */
	private function PrintOrderPackingSlips()
	{
		if(!isset($_POST['orders']) || !is_array($_POST['orders'])) {
			exit;
		}

		$packingSlips = '';
		require_once ISC_BASE_PATH.'/lib/order.printing.php';
		foreach($_POST['orders'] as $i => $orderId) {
			if($i > 0 && $packingSlips != '') {
				$packingSlips .= '<p class="PageBreak">&nbsp;</p>';
			}
			$packingSlips .= generatePrintablePackingSlip($orderId, 0);
		}
		$GLOBALS['PackingSlips'] = $packingSlips;
		if(!$packingSlips) {
			exit;
		}
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.print');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		echo '<script type="text/javascript">window.setTimeout("window.print();", 1000);</script>';
	}

	/**
	 * Print one or more packing slips a shipment
	 */
	private function PrintShipmentPackingSlips()
	{
		$shipments = array();
		$showShipmentSelect = false;

		// Selected a shipment to print
		if(isset($_GET['shipmentId']) && $_GET['shipmentId'] > 0) {
			$shipment = $this->GetShipmentById($_GET['shipmentId']);
			if(!is_array($shipment)) {
				exit;
			}
			$shipments = array($shipment['shipmentid']);
			$orderId = $shipment['shiporderid'];
			$showShipmentSelect = true;
		}
		// Printing all shipments for a specific order
		else if(isset($_GET['orderId']) && isset($_GET['shipmentId']) && $_GET['shipmentId'] == -1) {
			$query = "
				SELECT shipmentid
				FROM [|PREFIX|]shipments
				WHERE shiporderid='".(int)$_GET['orderId']."'
			";
			$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
			while($shipment = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
				$shipments[] = $shipment['shipmentid'];
			}
			$orderId = (int)$_GET['orderId'];
			$showShipmentSelect = true;
		}
		// Printing packing slips for one or more selected shipments
		else if(isset($_GET['shipments']) && is_array($_GET['shipments'])) {
			$shipments = array_map('intval', $_GET['shipments']);
			$orderId = null;
		}
		// Printing a packing slip for an entire order (single packing slip)
		else if(isset($_GET['orderId']) && IsId($_GET['orderId'])) {
			$orderId = (int)$_GET['orderId'];
			$shipments = array(0);
			$showShipmentSelect = true;
		}

		if($showShipmentSelect == true && IsId($orderId)) {
			$order = GetOrder($orderId);
			$GLOBALS['ShipmentSelectOrderId'] = $order['orderid'];

			if(count($shipments) > 1) {
				$GLOBALS['AllShipmentsSelected'] = 'selected="selected"';
			}

			$GLOBALS['PackingSlipsClass'] = 'WithShipmentSelect';

			$query = "
				SELECT shipmentid, shipdate
				FROM [|PREFIX|]shipments
				WHERE shiporderid='".(int)$_GET['orderId']."'
				ORDER BY shipdate ASC
			";
			$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
			$GLOBALS['ShipmentSelectOptions'] = '';
			while($shipment = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
				$sel = '';
				if(count($shipments) == 1 && $shipments[0] == $shipment['shipmentid']) {
					$sel = 'selected="selected"';
				}
				$shipmentName = GetLang('Shipment').' #'.$shipment['shipmentid'].' ('.CDate($shipment['shipdate']).')';
				$GLOBALS['ShipmentSelectOptions'] .= '<option value="'.$shipment['shipmentid'].'" '.$sel.'>'.$shipmentName.'</option>';
			}
			if($GLOBALS['ShipmentSelectOptions']) {
				$GLOBALS['ShipmentSelect'] = $GLOBALS['ISC_CLASS_TEMPLATE']->GetSnippet('ShipmentSelect');
			}
			else {
				$GLOBALS['PackingSlipsClass'] = '';
			}
		}

		$packingSlips = '';
		require_once ISC_BASE_PATH.'/lib/order.printing.php';
		foreach($shipments as $i => $shipmentId) {
			if($i > 0 && $packingSlips != '') {
				$packingSlips .= '<p class="PageBreak">&nbsp;</p>';
			}
			$packingSlips .= generatePrintablePackingSlip($orderId, $shipmentId);
		}
		$GLOBALS['PackingSlips'] = $packingSlips;
		if(!$packingSlips) {
			exit;
		}
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.print');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		echo '<script type="text/javascript">window.setTimeout("window.print();", 1000);</script>';
	}

	/**
	 * Validate a new shipment before it's inserted in to the database.
	 *
	 * @param array An array of information about the shipment.
	 * @param string Any error message received when validating, by reference.
	 * @return boolean True if the shipment is valid, false if not.
	 */
	private function ValidateShipment($data, &$error)
	{
		$error = '';
		if(!isset($data['orderId'])) {
			return false;
		}

		$order = GetOrder($data['orderId'], true);
		if(!isset($order['orderid']) || $order['ordisdigital'] == 1 || ($order['ordtotalqty']-$order['ordtotalshipped']) <= 0) {
			return false;
		}

		// No items were passed
		if(!isset($data['quantity']) || !is_array($data['quantity'])) {
			return false;
		}

		// Fetch out any items that have already been shipped for this order
		$shippedItems = array();
		$query = "
			SELECT itemid, itemqty, itemordprodid
			FROM [|PREFIX|]shipment_items i
			INNER JOIN [|PREFIX|]shipments s ON (s.shiporderid='".(int)$order['orderid']."' AND i.shipid=s.shipmentid)
		";

		$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
		while($shippedItem = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			if(!isset($shippedItems[$shippedItem['itemordprodid']])) {
				$shippedItems[$shippedItem['itemordprodid']] = 0;
			}
			$shippedItems[$shippedItem['itemordprodid']] += $shippedItem['itemqty'];
		}
		foreach($data['quantity'] as $productId => $quantity) {
			if(!isset($order['products'][$productId])) {
				$error = GetLang('OneMoreOrderItemsDontExist');
				return false;
			}

			$product = $order['products'][$productId];
			// We didn't choose to ship any of this item

			if($product['ordprodtype'] != 'physical') {
				continue;
			}

			$shippableQuantity = $product['ordprodqty'];
			if(isset($shippedItems[$product['orderprodid']])) {
				$shippableQuantity = $product['ordprodqty'] - $shippedItems[$product['orderprodid']];
			}

			if($data['quantity'][$product['orderprodid']] > $shippableQuantity) {
				$error = GetLang('ShipmentQuantityTooLarge');
				return false;
			}

			if(($shippableQuantity-$data['quantity'][$product['orderprodid']]) > 0) {
				$GLOBALS['StillShippable'] = true;
			}
		}

		// Otherwise, it's perfectly valid so return
		return true;
	}

	/**
	 * Commit a new shipment to the database.
	 *
	 * @param array An array of information about the shipment.
	 * @return boolean True if successful, false if not.
	 */
	private function CommitShipment($data)
	{
		$order = GetOrder($data['orderId'], true);

		if(!isset($data['shiptrackno'])) {
			$data['shiptrackno'] = '';
		}

		$GLOBALS['ISC_CLASS_DB']->StartTransaction();

		$newShipment = array(
			'shipdate' => time(),
			'shiptrackno' => $data['shiptrackno'],
			'shipmethod' => $data['shipmethod'],
			'shiporderid' => $data['orderId'],
			'shiporderdate' => $order['orddate'],
			'shipcomments' => $data['shipcomments'],
			'shipvendorid' => $order['ordvendorid'],
			'shipcustid' => $order['ordcustid'],

			// Billing Details
			'shipbillfirstname' => "Nome: ".$order['ordbillfirstname'],
			'shipbilllastname' => $order['ordbilllastname'],
			'shipbillcompany' => "Empresa: ".$order['ordbillcompany'],
			'shipbillstreet1' => "End 01: ".$order['ordbillstreet1'],
			'shipbillstreet2' => "End 02: ".$order['ordbillstreet2'],
			'shipbillsuburb' => "Cidade: ".$order['ordbillsuburb'],
			'shipbillstate' => "Estado: ".$order['ordbillstate'],
			'shipbillzip' => "CEP: ".$order['ordbillzip'],
			'shipbillcountry' => "Pais: ".$order['ordbillcountry'],
			'shipbillcountrycode' => $order['ordbillcountrycode'],
			'shipbillcountryid' => $order['ordbillcountryid'],
			'shipbillstateid' => $order['ordbillstateid'],
			'shipbillphone' => $order['ordbillphone'],
			'shipbillemail' => $order['ordbillemail'],

			// Shipping Details
			'shipshipfirstname' => "Nome: ".$order['ordshipfirstname'],
			'shipshiplastname' => $order['ordshiplastname'],
			'shipshipcompany' => "Empresa: ".$order['ordshipcompany'],
			'shipshipstreet1' => "End 01: ".$order['ordshipstreet1'],
			'shipshipstreet2' => "End 02: ".$order['ordshipstreet2'],
			'shipshipsuburb' => "Cidade: ".$order['ordshipsuburb'],
			'shipshipstate' => "Estado: ".$order['ordshipstate'],
			'shipshipzip' => "CEP: ".$order['ordshipzip'],
			'shipshipcountry' => "Pais: ".$order['ordshipcountry'],
			'shipshipcountrycode' => $order['ordshipcountrycode'],
			'shipshipcountryid' => $order['ordshipcountryid'],
			'shipshipstateid' => $order['ordshipstateid'],
			'shipshipphone' => $order['ordshipphone'],
			'shipshipemail' => $order['ordshipemail'],
		);
		$shipmentId = $GLOBALS['ISC_CLASS_DB']->InsertQuery('shipments', $newShipment);
		if(!$shipmentId) {
			return false;
		}

		$totalShipped = $order['ordtotalshipped'];
		// Now actually create the shipment based on all the items that were selected
		foreach($data['quantity'] as $productId => $quantity) {
			if(!isset($order['products'][$productId])) {
				return false;
			}

			$product = $order['products'][$productId];
			// We didn't choose to ship any of this item
			if((int)$data['quantity'][$product['orderprodid']] <= 0 || $product['ordprodtype'] != 'physical') {
				continue;
			}

			$newItem = array(
				'shipid' => $shipmentId,
				'itemordprodid' => (int)$productId,
				'itemprodid' => $product['ordprodid'],
				'itemprodsku' => $product['ordprodsku'],
				'itemprodname' => $product['ordprodname'],
				'itemqty' => (int)$quantity,
				'itemprodoptions' => $product['ordprodoptions'],
				'itemprodvariationid' => $product['ordprodvariationid']
			);

			if (isset($product['ordprodeventdate'])) {
				$newItem['itemprodeventdate'] = $product['ordprodeventdate'];
			}

			if (isset($product['ordprodeventname'])) {
				$newItem['itemprodeventname'] = $product['ordprodeventname'];
			}

			if(!$GLOBALS['ISC_CLASS_DB']->InsertQuery('shipment_items', $newItem)) {
				$GLOBALS['ISC_CLASS_DB']->RollbackTransaction();
				return false;
			}

			// Increase the amount of items shipped for this product
			$totalShipped += $quantity;
			$updatedOrderItem = array(
				'ordprodqtyshipped' => $product['ordprodqtyshipped'] + $quantity
			);
			if(!$GLOBALS['ISC_CLASS_DB']->UpdateQuery('order_products', $updatedOrderItem, "orderprodid='".(int)$product['orderprodid']."'")) {
				$GLOBALS['ISC_CLASS_DB']->RollbackTransaction();
				return false;
			}
		}

		$updatedOrder = array(
			'ordtotalshipped' => $totalShipped
		);

		// Chose to update the status of this order
		if(isset($data['ordstatus'])) {
			if(isset($GLOBALS['StillShippable'])) {
				$newStatus = ORDER_STATUS_PARTIALLY_SHIPPED;
			}
			else {
				$newStatus = ORDER_STATUS_SHIPPED;
				if(!$order['ordtrackingno']) {
					$updatedOrder['ordtrackingno'] = $data['shiptrackno'];
				}
			}
			UpdateOrderStatus($order['orderid'], $newStatus);
		}
		if(!$GLOBALS['ISC_CLASS_DB']->UpdateQuery('orders', $updatedOrder, "orderid='".(int)$order['orderid']."'")) {
			$GLOBALS['ISC_CLASS_DB']->RollbackTransaction();
			return false;
		}

		// Still here? Commit and send back the ID of the new shipment
		$GLOBALS['ISC_CLASS_DB']->CommitTransaction();
		return $shipmentId;
	}

	/**
	 * Save a new shipment in the database.
	 */
	public function SaveNewShipment()
	{
		$message = '';
		if(!$this->ValidateShipment($_REQUEST, $message)) {
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('status', 0);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('message', $message);
			$GLOBALS['ISC_CLASS_ADMIN_REMOTE']->SendXMLHeader();
			$GLOBALS['ISC_CLASS_ADMIN_REMOTE']->SendXMLResponse($tags);
			return;
		}

		$shipmentId = $this->CommitShipment($_REQUEST);

		if($shipmentId === false) {
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('status', 0);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('message', GetLang('ProblemSavingShipment').$GLOBALS['ISC_CLASS_DB']->GetErrorMsg());
		}
		else {
			// Log this action
			$GLOBALS['ISC_CLASS_LOG']->LogAdminAction($shipmentId);

			$title = sprintf(GetLang('ShipmentXCreated'), $shipmentId);
			$message = GetLang('ShipmentXCreatedMessage');
			$message .= ' <a href="#" onclick="Order.PrintShipmentPackingSlip('.$shipmentId.', '.$_POST['orderId'].'); return false;">'.GetLang('PrintPackingSlip').'</a>';

			// Are there any other items in this order that can still be shipped? If not, we need to hide the 'Ship Items' link
			if(isset($GLOBALS['StillShippable'])) {
				$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('stillShippable', 1);
			}
			else {
				$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('stillShippable', 0);
			}

			$query = "
				SELECT ordstatus
				FROM [|PREFIX|]orders
				WHERE orderid='".(int)$_POST['orderId']."'
			";
			$orderStatus = $GLOBALS['ISC_CLASS_DB']->FetchOne($query);

			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('orderId', $_POST['orderId']);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('shipmentId', $shipmentId);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('orderStatus', $orderStatus);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('status', 1);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('message', $message, true);
			$tags[] = $GLOBALS['ISC_CLASS_ADMIN_REMOTE']->MakeXMLTag('title', $title);
		}

		$GLOBALS['ISC_CLASS_ADMIN_REMOTE']->SendXMLHeader();
		$GLOBALS['ISC_CLASS_ADMIN_REMOTE']->SendXMLResponse($tags);
	}

	/**
	 * Show the form to create a new shipment from one or more items in an order.
	 */
	public function CreateShipment()
	{
		if(!isset($_REQUEST['orderId'])) {
			exit;
		}

		$order = GetOrder($_REQUEST['orderId'], true);
		if(!isset($order['orderid']) || $order['ordisdigital'] == 1 || ($order['ordtotalqty']-$order['ordtotalshipped']) <= 0) {
			exit;
		}

		$GLOBALS['OrderId'] = $order['orderid'];
		$GLOBALS['OrderDate'] = CDate($order['orddate']);
		$GLOBALS['ShippingMethod'] = isc_html_escape($order['ordshipmethod']);
		$GLOBALS['TrackingNumber'] = isc_html_escape($order['ordtrackingno']);
		$GLOBALS['OrderComments'] = isc_html_escape($order['ordcustmessage']);

		// Fetch out any items that have already been shipped for this order
		$shippedItems = array();
		$query = "
			SELECT itemid, itemqty, itemordprodid
			FROM [|PREFIX|]shipment_items i
			INNER JOIN [|PREFIX|]shipments s ON (s.shiporderid='".(int)$order['orderid']."' AND i.shipid=s.shipmentid)
		";

		$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
		while($shippedItem = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			if(!isset($shippedItems[$shippedItem['itemordprodid']])) {
				$shippedItems[$shippedItem['itemordprodid']] = 0;
			}
			$shippedItems[$shippedItem['itemordprodid']] += $shippedItem['itemqty'];
		}

		// OK, now loop through all of the items in the order and build the list of what we can ship
		$GLOBALS['ProductList'] = '';
		foreach($order['products'] as $product) {
			$shippableQuantity = $product['ordprodqty'];
			if(isset($shippedItems[$product['orderprodid']])) {
				$shippableQuantity = $product['ordprodqty'] - $shippedItems[$product['orderprodid']];
			}

			// Completely skip over this item if there's nothing to ship
			if($shippableQuantity <= 0 || $product['ordprodtype'] != 'physical') {
				continue;
			}

			$doneProducts = true;
			$GLOBALS['ProductName'] = isc_html_escape($product['ordprodname']);
			$GLOBALS['ProductId'] = $product['ordprodid'];
			$GLOBALS['ProductPrice'] = FormatPrice($product['ordprodcost']);

			$GLOBALS['HideGiftWrapping'] = 'display: none';
			$GLOBALS['WrappingName'] = '';
			$GLOBALS['WrappingMessage'] = '';
			if($product['ordprodwrapid'] > 0) {
				$GLOBALS['HideGiftWrapping'] = '';
				$GLOBALS['WrappingName'] = isc_html_escape($product['ordprodwrapname']);
				if($product['ordprodwrapmessage']) {
					$GLOBALS['WrappingMessage'] = nl2br(isc_html_escape($product['ordprodwrapmessage']));
				}
				else {
					$GLOBALS['HideGiftWrappingMessage'] = 'display: none';
				}
			}

			// Show the quantity as a dropdown
			if(GetConfig('TagCartQuantityBoxes') == 'dropdown') {
				$GLOBALS['QuantityInput'] = '<select class="QtyEntry" name="quantity['.$product['orderprodid'].']">';
				for($i = $shippableQuantity; $i >= 0; --$i) {
					$sel = '';
					if($i == $shippableQuantity) {
						$sel = 'selected="selected"';
					}
					$GLOBALS['QuantityInput'] .= '<option value="'.$i.'" '.$sel.'>'.$i.'</option>';
				}
				$GLOBALS['QuantityInput'] .= '</select>';
			}
			// As a textbox
			else {
				$GLOBALS['QuantityInput'] = '<input class="QtyEntry Field50 MaxValue'.$shippableQuantity.'" type="text" value="'.$shippableQuantity.'" name="quantity['.$product['orderprodid'].']" style="text-align: center;" />';
			}
			$GLOBALS['ProductList'] .= $GLOBALS['ISC_CLASS_TEMPLATE']->GetSnippet('CreateShipmentItem');
		}

		if(!isset($doneProducts)) {
			exit;
		}

		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.create');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		exit;
	}

	/**
	 * Delete one or more selected shipments from the database.
	 */
	private function DeleteShipments()
	{
		$queries = array();

		if(!isset($_POST['shipments']) || !is_array($_POST['shipments'])) {
			ob_end_clean();
			header('Location: index.php?ToDo=viewShipments');
			exit;
		}

		$GLOBALS['ISC_CLASS_DB']->StartTransaction();

		// Make sure the user actually has permission to delete these shipments
		$shipmentIds = implode(',', array_map('intval', $_POST['shipments']));
		$vendorId = $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId();
		if($vendorId > 0) {
			$query = "
				SELECT shipmentid
				FROM [|PREFIX|]shipments
				WHERE shipmentid IN (".$shipmentIds.") AND shipvendorid='".(int)$vendorId."'
			";
			$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
			$shipmentIds = array(0);
			while($shipment = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
				$shipmentIds[] = $shipment['shipmentid'];
			}
			$shipmentIds = implode(',', $shipmentIds);
		}

		$updatedOrders = array();
		$query = "
			SELECT s.itemordprodid, s.itemqty, p.ordprodqtyshipped, p.orderorderid, p.orderprodid
			FROM [|PREFIX|]shipment_items s
			INNER JOIN [|PREFIX|]order_products p ON (p.orderprodid=s.itemordprodid)
			WHERE s.shipid IN (".$shipmentIds.")
		";
		$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
		while($shippedItem = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			$shippedQty = $shippedItem['ordprodqtyshipped'] - $shippedItem['itemqty'];
			if(!isset($updatedOrders[$shippedItem['orderorderid']])) {
				$updatedOrders[$shippedItem['orderorderid']] = $shippedItem['itemqty'];
			}
			else {
				$updatedOrders[$shippedItem['orderorderid']] += $shippedItem['itemqty'];
			}
			if($shippedQty < 0) {
				$shippedQty = 0;
			}
			$updatedProduct = array(
				'ordprodqtyshipped' => $shippedQty
			);
			$GLOBALS['ISC_CLASS_DB']->UpdateQuery('order_products', $updatedProduct, "orderprodid='".$shippedItem['orderprodid']."'");
		}

		foreach($updatedOrders as $orderId => $adjustment) {
			$query = "
				UPDATE [|PREFIX|]orders
				SET ordtotalshipped=IF(ordtotalshipped-".$adjustment." > 0, ordtotalshipped-".$adjustment.", 0)
				WHERE orderid='".$orderId."'
			";
			$GLOBALS['ISC_CLASS_DB']->Query($query);
		}

		// Now it's safe to delete the shipments
		$GLOBALS['ISC_CLASS_DB']->DeleteQuery('shipments', "WHERE shipmentid IN (".$shipmentIds.")");
		$GLOBALS['ISC_CLASS_DB']->DeleteQuery('shipment_items', "WHERE shipid IN (".$shipmentIds.")");

		if(!$GLOBALS['ISC_CLASS_DB']->GetErrorMsg()) {
			$GLOBALS['ISC_CLASS_DB']->CommitTransaction();
			$GLOBALS['ISC_CLASS_LOG']->LogAdminAction(count($_POST['shipments']));
			FlashMessage('The selected shipments have been deleted successfully.', MSG_SUCCESS, 'index.php?ToDo=viewShipments');
		}
		// If there was an error, redirect and show the error
		else {
			$GLOBALS['ISC_CLASS_DB']->RollbackTransaction();
			FlashMessage($GLOBALS['ISC_CLASS_DB']->GetErrorMsg(), MSG_ERROR, 'index.php?ToDo=viewShipments');
		}
	}

	/**
	 * Create a new view for shipments.
	 */
	private function CreateView()
	{
		$GLOBALS['BreadcrumEntries'][GetLang('CreateShipmentView')] = '';
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintHeader();
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.view');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintFooter();
	}

	/**
	 * Delete a custom view for shipments.
	 */
	private function DeleteCustomSearch()
	{
		// Deleting the view failed, show an error
		if(!$GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->DeleteSearch($_GET['searchId'])) {
			FlashMessage(GetLang('DeleteCustomSearchFailed'), MSG_ERROR, 'index.php?ToDo=viewShipments');
		}
		// View was deleted successfully, redirect
		else {
			$GLOBALS['ISC_CLASS_LOG']->LogAdminAction($_GET['searchId']);
			FlashMessage(GetLang('DeleteCustomSearchSuccess'), MSG_SUCCESS, 'index.php?ToDo=viewShipments');
		}
	}

	/**
	 * Perform a custom view search for shipments.
	 */
	private function CustomSearch()
	{
		if(!isset($_REQUEST['searchId'])) {
			ob_end_clean();
			header('Location: index.php?ToDo=viewShipments');
			exit;
		}

		SetSession('shipmentsearch', (int)$_GET['searchId']);
		$this->customSearch = $GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->LoadSearch($_GET['searchId']);
		$_REQUEST = array_merge($_REQUEST, $this->customSearch['searchvars']);

		$GLOBALS['BreadcrumEntries'][GetLang('CustomView')] = '';
		$this->ManageShipments();
	}

	/**
	 * Redirect from the search page to the listing of shipment search results.
	 */
	private function SearchShipmentsRedirect()
	{
		// Are we saving this as a view?
		if(isset($_GET['viewName']) && $_GET['viewName'] != '') {
			$searchId = $GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->SaveSearch($_GET['viewName'], $_GET);

			if($searchId > 0) {
				// Log the action
				$GLOBALS['ISC_CLASS_LOG']->LogAdminAction($searchId, $_GET['viewName']);

				// Redirect to the actual search
				FlashMessage(GetLang('CustomSearchSaved'), MSG_SUCCESS, 'index.php?ToDo=customShipmentSearch&searchId='.$searchId.'&new=true');
			}
			else {
				$message = sprintf(GetLang('ViewAlreadyExists'), isc_html_escape($_GET['viewName']));
				FlashMessage($message, MSG_ERROR, 'index.php?ToDo=viewShipments');
			}
		}

		// Otherwise, just a normal search
		$GLOBALS['BreadcrumEntries'][GetLang('SearchResults')] = '';
		$this->ManageShipments();
	}

	/**
	 * Show the form to search shipments.
	 */
	private function SearchShipments()
	{
		$GLOBALS['BreadcrumEntries'][GetLang('SearchShipments')] = '';
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintHeader();
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.search');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintFooter();
	}

	/**
	 * Export shipments to a CSV or XML file.
	 */
	private function ExportShipments()
	{
		// Is this a custom view?
		if(isset($_GET['searchId'])) {
			$this->customSearch = $GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->LoadSearch($_GET['searchId']);
			$_REQUEST = array_merge($_REQUEST, $this->customSearch['searchvars']);
		}

		// Validate the sort order
		if(isset($_REQUEST['sortOrder']) && $_REQUEST['sortOrder'] == 'asc') {
			$sortOrder = 'asc';
		}
		else {
			$sortOrder = 'desc';
		}

		// Which fields can we sort by?
		$validSortFields = array(
			'shipmentid',
			'shipdate',
			'shiporderid',
			'shiporderdate',
			'shipfullname',
		);
		if(isset($_REQUEST['sortField']) && in_array($_REQUEST['sortField'], $validSortFields)) {
			$sortField = $_REQUEST['sortField'];
			SaveDefaultSortField('ManageShipments', $_REQUEST['sortField'], $sortOrder);
		}
		else {
			list($sortField, $sortOrder) = GetDefaultSortField('ManageShipments', 'shipmentid', $sortOrder);
		}

		ob_end_clean();

		// Grab the queries we'll be executing
		$shipmentQueries = $this->BuildShipmentSearchQuery(0, $sortField, $sortOrder, false);
		$numShipments = $GLOBALS['ISC_CLASS_DB']->FetchOne($shipmentQueries['countQuery']);
		if(!$numShipments) {
			header('Location: index.php?ToDo=viewShipments');
			exit;
		}

		// Set up the list of columns
		$columns = array(
			'shipmentid' => 'SHIPMENT ID',
			'shipdate' => 'DATE SHIPPED',
			'shiporderid' => 'ORDER ID',
			'shiporderdate' => 'ORDER DATE',
			'shiptrackno' => 'TRACKING NO',
			'shipmethod' => 'SHIPPING METHOD',
			'shipbillfullname' => 'BILLING FULL NAME',
			'shipbillfirstname' => 'BILLING FIRST NAME',
			'shipbilllastname' => 'BILLING LAST NAME',
			'shipbillcompany' => 'BILLING COMPANY',
			'shipbillstreet1' => 'BILLING STREET 1',
			'shipbillstreet2' => 'BILLING STREET 2',
			'shipbillsuburb' => 'BILLING SUBURB',
			'shipbillstate' => 'BILLING STATE',
			'shipbillzip' => 'BILLING ZIP/POSTCODE',
			'shipbillcountry' => 'BILLING COUNTRY',
			'shipbillphone' => 'BILLING PHONE',
			'shipshipfirstname' => 'SHIPPING FIRST NAME',
			'shipshiplastname' => 'SHIPPING LAST NAME',
			'shipshipfullname' => 'SHIPPING FULL NAME',
			'shipshipcompany' => 'SHIPPING COMPANY',
			'shipshipstreet1' => 'SHIPPING STREET 1',
			'shipshipstreet2' => 'SHIPPING STREET 2',
			'shipshipsuburb' => 'SHIPPING SUBURB',
			'shipshipstate' => 'SHIPPING STATE',
			'shipshipzip' => 'SHIPPING ZIP',
			'shipshipcountry' => 'SHIPPING COUNTRY',
			'shipshipphone' => 'SHIPPING PHONE',
			'shipitems' => 'SHIPMENT ITEMS'
		);

		if(!isset($_GET['format']) || $_GET['format'] == "csv") {
			$ext = 'csv';
		}
		else {
			$ext = 'xml';
		}

		$GLOBALS['ISC_CLASS_LOG']->LogAdminAction(isc_strtoupper($_REQUEST['format']));

		header("Content-Type: application/force-download");
		header("Content-Type: application/octet-stream");
		header("Content-Type: application/download");
		header("Content-Disposition: attachment; filename=\"shipments-".isc_date("Y-m-d").".".$ext."\";");

		if($ext == 'csv') {
			$row = '';
			foreach($columns as $field) {
				$row .= EXPORT_FIELD_ENCLOSURE.$field.EXPORT_FIELD_ENCLOSURE.EXPORT_FIELD_SEPARATOR;
			}
			echo rtrim($row, EXPORT_FIELD_SEPARATOR);
			echo EXPORT_RECORD_SEPARATOR;
		}
		else {
			echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
			echo  "<shipments>\n";
		}

		// Export the shipments
		$result = $GLOBALS['ISC_CLASS_DB']->Query($shipmentQueries['query']);
		while($shipment = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			if($ext == 'csv') {
				$shipment['shipitems'] = '';
			}
			else {
				$shipment['shipitems'] = array();
			}
			$query = "
				SELECT itemid, itemprodid, itemordprodid, itemprodsku, itemprodname, itemqty
				FROM [|PREFIX|]shipment_items
				WHERE shipid='".$shipment['shipmentid']."'
			";
			$itemResult = $GLOBALS['ISC_CLASS_DB']->Query($query);
			while($item = $GLOBALS['ISC_CLASS_DB']->Fetch($itemResult)) {
				if($ext == 'csv') {
					$shipment['shipitems'] .= $item['itemprodid'].'|'.$item['itemprodname'].'|'.$item['itemprodsku'].'|'.$item['itemqty'].'~';
				}
				else {
					$shipment['shipitems'][] = $item;
				}
			}
			if($ext == 'csv') {
				$shipment['shipitems'] = rtrim($shipment['shipitems'], '~');
			}

			// If CSV export, handle that now
			if($ext == 'csv') {
				$row = '';
				foreach($columns as $k => $v) {
					switch($k) {
						case 'shipbillfullname':
							$value = trim($shipment['shipbillfirstname'].' '.$shipment['shipbilllastname']);
							break;
						case 'shipshipfullname':
							$value = trim($shipment['shipshipfirstname'].' '.$shipment['shipshiplastname']);
							break;
						case 'shipdate':
						case 'shiporderdate':
							$value = isc_date(GetConfig('ExportDateFormat'), $shipment[$k]);
							break;
						default:
							$value = $shipment[$k];
					}

					$value = str_replace(EXPORT_FIELD_ENCLOSURE, EXPORT_FIELD_ENCLOSURE . EXPORT_FIELD_ENCLOSURE, $value);
					$row .= EXPORT_FIELD_ENCLOSURE.$value.EXPORT_FIELD_ENCLOSURE.EXPORT_FIELD_SEPARATOR;
				}
				echo rtrim($row, EXPORT_FIELD_SEPARATOR);
				echo EXPORT_RECORD_SEPARATOR;
				@flush();
			}
			// XML is easy!
			else {
				echo "\t<shipment shipmentid=\"".$shipment['shipmentid']."\">\n";
				foreach($columns as $k => $v) {
					switch($k) {
						case 'shipbillfullname':
							$value = trim($shipment['shipbillfirstname'].' '.$shipment['shipbilllastname']);
							break;
						case 'shipshipfullname':
							$value = trim($shipment['shipshipfirstname'].' '.$shipment['shipshiplastname']);
							break;
						case 'shipdate':
						case 'shiporderdate':
							$value = isc_date(GetConfig('ExportDateFormat'), $shipment[$k]);
							break;
						case 'shipitems':
							echo "\t\t<items>\n";
							foreach($shipment['shipitems'] as $item) {
								echo "\t\t\t<item>\n";
								foreach($item as $itemKey => $itemVal) {
									echo "\t\t\t<".$itemKey."><![CDATA[".$itemVal."]]></".$itemKey.">\n";
								}
								echo "\t\t\t</item>\n";
							}
							echo "\t\t</items>\n";
							continue 2;
						case 'shipmentid':
							continue 2;
						default:
							$value = $shipment[$k];
					}

					echo "\t\t<".$k."><![CDATA[".$value."]]></".$k.">\n";
					flush();
				}
				echo "\t</shipment>\n";
			}
		}

		if($ext == 'xml') {
			echo "</shipments>";
		}
	}

	/**
	 * Build the search queries used for searching/retrieving shipments.
	 *
	 * @param int The starting position for the search.
	 * @param string The field to sort the shipments by.
	 * @param string The order to sort the shipments in.
	 * @param boolean Set to true if the limit should be added to the MySQL query.
	 * @return array An array containing both the query and the COUNT() query with the built search terms.
	 */
	private function BuildShipmentSearchQuery($start, $sortField, $sortOrder, $addLimit=true)
	{
		$query = "
			SELECT s.*
			FROM [|PREFIX|]shipments s
		";

		$countQuery = "
			SELECT COUNT(s.shipmentid)
			FROM [|PREFIX|]shipments s
		";

		// Let's add in any search arguments
		$queryWhere = '';

		// This one is a sucky one, so do it first
		if(isset($_REQUEST['searchQuery']) && $_REQUEST['searchQuery'] != '') {
			$searchTerms = $GLOBALS['ISC_CLASS_DB']->Quote($_REQUEST['searchQuery']);
			$queryWhere .= " AND (
				shipmentid='".(int)$_REQUEST['searchQuery']."'
				OR shiptrackno='".$searchTerms."'
				OR CONCAT(shipbillfirstname,' ', shipbilllastname) LIKE '%".$searchTerms."%'
				OR CONCAT(shipshipfirstname,' ', shipshiplastname) LIKE '%".$searchTerms."%'
				OR shipmethod LIKE '%".$searchTerms."'
				OR shipcomments LIKE '%".$searchTerms."'
				OR shipbillcountry LIKE '%".$searchTerms."'
				OR shipshipcountry LIKE '%".$searchTerms."'
			) ";
		}

		$integerValues = array(
			'shipmentId'	=> 's.shipmentid',
			'orderId'		=> 's.shiporderid',
			'customerId'	=> 's.shipcustid',
			'vendorId'		=> 's.shipvendorid',
		);

		foreach($integerValues as $requestField => $column) {
			if(isset($_REQUEST[$requestField]) && $_REQUEST[$requestField] != '') {
				$queryWhere .= " AND ".$column."='".(int)$_REQUEST[$requestField]."'";
			}
		}

		$rangeValues = array(
			'shipment'	=> 's.shipmentid',
			'order'		=> 's.shiporderid'
		);

		foreach($rangeValues as $requestField => $column) {
			$fromField	= $requestField.'From';
			$toField	= $requestField.'To';

			if(isset($_REQUEST[$fromField]) && $_REQUEST[$fromField] != '') {
				$queryWhere .= " AND ".$column." >= '".(int)$_REQUEST[$fromField]."'";
			}

			if(isset($_REQUEST[$toField]) && $_REQUEST[$toField] != '') {
				$queryWhere .= " AND ".$column." <= '".(int)$_REQUEST[$toField]."'";
			}
		}

		$dateValues = array(
			'shipdate'		=> 's.shipdate',
			'shiporderdate'	=> 's.shiporderdate'
		);
		foreach($dateValues as $requestField => $column) {
			$rangeField = $requestField.'Range';
			$fromField = $requestField.'From';
			$toField = $requestField.'To';

			unset($fromStamp, $toStamp);

			// Nothing selected, carry on
			if(!isset($_REQUEST[$rangeField]) || $_REQUEST[$rangeField] == '') {
				continue;
			}

			switch($_REQUEST[$rangeField]) {
				// Today
				case 'today':
					$fromStamp = mktime(0, 0, 0, isc_date('m'), isc_date('d'), isc_date('Y'));
					break;
				// Last two days
				case 'yesterday':
					$fromStamp = mktime(0, 0, 0, isc_date('m'), isc_date('d')-1, isc_date('Y'));
					$toStamp = mktime(0, 0, 0, isc_date('m'), isc_date('d')-1, isc_date('Y'));
					break;
				// Last 24 Hours
				case 'day':
					$fromStamp = time()-60*60*24;
					break;
				// Last 7 Days
				case 'week':
					$fromStamp = time()-60*60*24*7;
					break;
				// Last 30 Days
				case 'month':
					$fromStamp = time()-60*60*24*30;
					break;
				// This Month
				case 'this_month':
					$fromStamp = mktime(0, 0, 0, isc_date('m'), 1, isc_date('Y'));
					break;
				// This Year
				case 'this_year':
					$fromStamp = mktime(0, 0, 0, 1, 1, isc_date('Y'));
					break;
				// Otherwise, we have a custom date
				default:
					if(isset($_REQUEST[$fromField]) && $_REQUEST[$fromField] != '') {
						$datePieces = explode('/', $_REQUEST[$fromField]);
						$fromStamp = mktime(0, 0, 0, $datePieces[0], $datePieces[1], $datePieces[2]);
					}

					if(isset($_REQUEST[$toField]) && $_REQUEST[$toField] != '') {
						$datePieces = explode('/', $_REQUEST[$toField]);
						$toStamp = mktime(0, 0, 0, $datePieces[0], $datePieces[1], $datePieces[2]);
					}
			}

			if(isset($fromStamp)) {
				$queryWhere .= " AND ".$column." >= '".(int)$fromStamp."'";
			}

			if(isset($toStamp)) {
				$queryWhere .= " AND ".$column." <= '".(int)$toStamp."'";
			}
		}

		// Only fetch those shipments belonging to the current vendor
		if($GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId() > 0) {
			$queryWhere .= " AND shipvendorid='".(int)$GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId()."'";
		}

		// Construct the actual query
		$query .= " WHERE 1=1 ".$queryWhere;
		$countQuery .= " WHERE 1=1 ".$queryWhere;

		$query .= " ORDER BY ".$sortField." ".$sortOrder;
		if($addLimit) {
			$query .= $GLOBALS['ISC_CLASS_DB']->AddLimit($start, ISC_SHIPMENTS_PER_PAGE);
		}

		// Return or generated queries
		return array(
			'query' => $query,
			'countQuery' => $countQuery
		);
	}

	/**
	 * Show the 'View Shipments' page.
	 */
	private function ManageShipments()
	{
		$numViews = 0;

		// Fetch any shipments and place them in the data grid
		$GLOBALS['ShipmentDataGrid'] = $this->ManageShipmentsGrid();

		// Was this an ajax based sort? Return the table now
		if(isset($_REQUEST['ajax']) && $_REQUEST['ajax'] == 1) {
			echo $GLOBALS['ShipmentDataGrid'];
			return;
		}

		$GLOBALS['HideClearResults'] = 'display: none';
		if(isset($_REQUEST['searchQuery']) || isset($_GET['searchId'])) {
			$GLOBALS['HideClearResults'] = "";
		}

		if(isset($this->customSearch['searchname'])) {
			$GLOBALS['ViewName'] = isc_html_escape($this->customSearch['searchname']);
		}
		else {
			$GLOBALS['ViewName'] = GetLang('AllShipments');
			$GLOBALS['HideDeleteViewLink'] = 'display: none';
		}

		$GLOBALS['Message'] = GetFlashMessageBoxes();

		// Do we need to disable the delete button?
		if(!$GLOBALS['ShipmentDataGrid']) {
			$GLOBALS['DisableDelete'] = 'disabled="disabled"';
			$GLOBALS['DisableExport'] = 'disabled="disabled"';
		}
		// Otherwise, we have one or more results
		else {
			if(!$GLOBALS['Message'] && count($_GET) > 1) {
				if($this->numShipmentResults = 1) {
					$message = GetLang('ShipmentSearchResultsBelow1');
				}
				else {
					$message = sprintf(GetLang('ShipmentSearchResultsBelowX'), $this->numShipmentResults);
				}
				$GLOBALS['Message'] = MessageBox($message, MSG_SUCCESS);
			}
		}

		// Grab the custom views in a list
		if(!isset($_REQUEST['searchId'])) {
			$selectedSearch = 0;
			$GLOBALS['HideDeleteCustomView'] = 'display: none';
		}
		else {
			$selectedSearch = $_REQUEST['searchId'];
			$GLOBALS['HideDeleteCustomView'] = '';
			$GLOBALS['CustomViewId'] = (int)$_REQUEST['searchId'];
		}
		$GLOBALS['CustomViews'] = $GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->GetSearchesAsOptions($selectedSearch, $numViews, 'AllShipments', 'viewShipments', 'customShipmentSearch');

		// If we have nothing to show, show.. nothing?
		if(!$GLOBALS['ShipmentDataGrid']) {
			$GLOBALS['DisplayGrid'] = 'display: none';

			if(count($_GET) > 1) {
				$GLOBALS['Message'] = MessageBox(GetLang('NoShipmentResults'), MSG_ERROR);
			}
			else {
				$GLOBALS['Message'] = MessageBox(GetLang('NoShipments'), MSG_SUCCESS);
				$GLOBALS['DisplaySearch'] = 'display: none';
			}
		}

		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintHeader();
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.manage');
		$GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate();
		$GLOBALS['ISC_CLASS_ADMIN_ENGINE']->PrintFooter();
	}

	/**
	 * Generate the grid that shows the shipment results in it.
	 *
	 * @return string The generated grid of shipments for the current page.
	 */
	private function ManageShipmentsGrid()
	{
		$page = 0;
		$start = 0;
		$numPages = 0;

		$shipmentGrid = '';
		$GLOBALS['Nav'] = '';

		// Is this a custom view?
		if(isset($_GET['searchId'])) {
			$this->customSearch = $GLOBALS['ISC_CLASS_ADMIN_CUSTOMSEARCH']->LoadSearch($_GET['searchId']);
			$_REQUEST = array_merge($_REQUEST, (array)$this->customSearch['searchvars']);

			// Override the sort fields of the view
			if(isset($_GET['sortField'])) {
				$_REQUEST['sortField'] = $_GET['sortField'];
			}

			if(isset($_GET['sortOrder'])) {
				$_REQUEST['sortOrder'] = $_GET['sortOrder'];
			}
		}
		else if(isset($_REQUEST['searchQuery'])) {
			$GLOBALS['Query'] = isc_html_escape($_GET['searchQuery']);
		}

		// Validate the sort order
		if(isset($_REQUEST['sortOrder']) && $_REQUEST['sortOrder'] == 'asc') {
			$sortOrder = 'asc';
		}
		else {
			$sortOrder = 'desc';
		}

		// Which fields can we sort by?
		$validSortFields = array(
			'shipmentid',
			'shipdate',
			'shiporderid',
			'shiporderdate',
			'shipfullname',
		);
		if(isset($_REQUEST['sortField']) && in_array($_REQUEST['sortField'], $validSortFields)) {
			$sortField = $_REQUEST['sortField'];
			SaveDefaultSortField('ManageShipments', $_REQUEST['sortField'], $sortOrder);
		}
		else {
			list($sortField, $sortOrder) = GetDefaultSortField('ManageShipments', 'shipmentid', $sortOrder);
		}

		if (isset($_GET['page'])) {
			$page = (int)$_GET['page'];
		} else {
			$page = 1;
		}

		// Build the pagination and sort URL
		$searchURL = '';
		foreach($_GET as $k => $v) {
			if($k == "sortField" || $k == "sortOrder" || $k == "page" || $k == "new" || $k == "ToDo" || !$v) {
				continue;
			}
			$searchURL .= '&'.$k.'='.urlencode($v);
		}
		$sortURL = $searchURL.'&sortField='.$sortField.'&sortOrder='.$sortOrder;
		$GLOBALS['SortURL'] = $sortURL;

		// Limit the number of shipments returned
		if($page == 1) {
			$start = 0;
		}
		else {
			$start = ($page-1) * ISC_SHIPMENTS_PER_PAGE;
		}

		// Grab the queries we'll be executing
		$shipmentQueries = $this->BuildShipmentSearchQuery($start, $sortField, $sortOrder);

		// How many results do we have?
		$numShipments = $GLOBALS['ISC_CLASS_DB']->FetchOne($shipmentQueries['countQuery']);
		$numPages = ceil($numShipments / ISC_SHIPMENTS_PER_PAGE);

		// Add the "(Page x of y)" label
		if($numShipments > ISC_SHIPMENTS_PER_PAGE) {
			$GLOBALS['Nav'] = '('.GetLang('Page').' '.$page.' '.GetLang('Of').' '.$numPages.')&nbsp;&nbsp;&nbsp;';
			$GLOBALS['Nav'] .= BuildPagination($numShipments, ISC_SHIPMENTS_PER_PAGE, $page, 'index.php?ToDo=viewShipments'.$sortURL);
		}
		else {
			$GLOBALS['Nav'] = '';
		}

		$GLOBALS['SortField'] = $sortField;
		$GLOBALS['SortOrder'] = $sortOrder;
		$sortLinks = array(
			'Id' => 'shipmentid',
			'Date' => 'shipdate',
			'OrderId' => 'shiporderid',
			'OrderDate' => 'shiporderdate',
			'Name' => 'shipfullname'
		);
		BuildAdminSortingLinks($sortLinks, 'index.php?ToDo=viewShipments&amp;'.$searchURL.'&amp;page='.$page, $sortField, $sortOrder);

		$result = $GLOBALS['ISC_CLASS_DB']->Query($shipmentQueries['query']);

		// Display the shipments
		while($shipment = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			$GLOBALS['ShipmentId'] = $shipment['shipmentid'];
			$GLOBALS['OrderId'] = $shipment['shiporderid'];

			$GLOBALS['Date'] = isc_date(GetConfig('DisplayDateFormat'), $shipment['shipdate']);
			$GLOBALS['OrderDate'] = isc_date(GetConfig('DisplayDateFormat'), $shipment['shiporderdate']);

			// If the customer still exists, link to the customer page
			$GLOBALS['ShippedTo'] = isc_html_escape($shipment['shipshipfirstname'].' '.$shipment['shipshiplastname']);

			$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.manage.row');
			$shipmentGrid .= $GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate(true);
		}

		if(!$shipmentGrid) {
			return '';
		}

		$GLOBALS['ShipmentGrid'] = $shipmentGrid;
		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.manage.grid');
		return $GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate(true);
	}

	/**
	 * Generate the 'Quick View' for a particular shipment.
	 *
	 * @param int The shipment ID.
	 * @return string The generated quick view for the shipment.
	 */
	public function GetShipmentQuickView($shipmentId)
	{
		$shipment = $this->GetShipmentById($shipmentId);

		// Invalid shipment, just return
		if(!isset($shipment['shipmentid'])) {
			return GetLang('ShipmentNotFound');
		}
		// If this user is a vendor, do they have permission to acess this shipment?
		if($GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId() && $row['shipvendorid'] != $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId()) {
			exit;
		}

		$GLOBALS['ShipmentId'] = $shipment['shipmentid'];
		$GLOBALS['ShipmentDate'] = isc_date("d M Y H:i:s", $shipment['shipdate']);
		$GLOBALS['OrderId'] = $shipment['shiporderid'];
		$GLOBALS['OrderDate'] = isc_date("d M Y H:i:s", $shipment['shiporderdate']);
		$GLOBALS['TrackingNo'] = isc_html_escape($shipment['shiptrackno']);
		if(!$GLOBALS['TrackingNo']) {
			$GLOBALS['TrackingNo'] = GetLang('NA');
		}
		$GLOBALS['ShippingMethod'] = isc_html_escape($shipment['shipmethod']);

		// Build the billing address that was sent with this shipment
		$addressDetails = array(
			'shipfirstname'	=> "Nome: ".$shipment['shipbillfirstname'],
			'shiplastname'	=> $shipment['shipbilllastname'],
			'shipcompany'	=> "Empresa: ".$shipment['shipbillcompany'],
			'shipaddress1'	=> "End 01: ".$shipment['shipbillstreet1'],
			'shipaddress2'	=> "End 02: ".$shipment['shipbillstreet2'],
			'shipcity'		=> "Cidade: ".$shipment['shipbillsuburb'],
			'shipstate'		=> "Estado: ".$shipment['shipbillstate'],
			'shipzip'		=> "CEP: ".$shipment['shipbillzip'],
			'shipcountry'	=> "Pais: ".$shipment['shipbillcountry'],
			'countrycode'	=> "ISO: ".$shipment['shipbillcountrycode'],
		);
		$GLOBALS['BillingAddress'] = ISC_ADMIN_ORDERS::BuildOrderAddressDetails($addressDetails);

		$GLOBALS['BillingEmail'] = GetLang('NA');
		if($shipment['shipbillemail']) {
			$GLOBALS['BillingEmail'] = '<a href="mailto:'.urlencode($shipment['shipbillemail']).'">'.isc_html_escape($shipment['shipbillemail']).'</a>';
		}

		$GLOBALS['BillingPhone'] = GetLang('NA');
		if($shipment['shipbillphone']) {
			$GLOBALS['BillingPhone'] = isc_html_escape($shipment['shipbillphone']);
		}

		$addressDetails = array(
			'shipfirstname'	=> "Nome: ".$shipment['shipshipfirstname'],
			'shiplastname'	=> $shipment['shipshiplastname'],
			'shipcompany'	=> "Empresa: ".$shipment['shipshipcompany'],
			'shipaddress1'	=> "End 01: ".$shipment['shipshipstreet1'],
			'shipaddress2'	=> "End 02: ".$shipment['shipshipstreet2'],
			'shipcity'		=> "Cidade: ".$shipment['shipshipsuburb'],
			'shipstate'		=> "Estado: ".$shipment['shipshipstate'],
			'shipzip'		=> "CEP: ".$shipment['shipshipzip'],
			'shipcountry'	=> "Pais: ".$shipment['shipshipcountry'],
			'countrycode'	=> "ISO: ".$shipment['shipshipcountrycode'],
		);
		$GLOBALS['ShippingAddress'] = ISC_ADMIN_ORDERS::BuildOrderAddressDetails($addressDetails);

		$GLOBALS['ShippingEmail'] = GetLang('NA');
		if($shipment['shipshipemail']) {
			$GLOBALS['ShippingEmail'] = '<a href="mailto:'.urlencode($shipment['shipshipemail']).'">'.isc_html_escape($shipment['shipshipemail']).'</a>';
		}

		$GLOBALS['ShippingPhone'] = GetLang('NA');
		if($shipment['shipshipphone']) {
			$GLOBALS['ShippingPhone'] = isc_html_escape($shipment['shipshipphone']);
		}

		$GLOBALS['HideVendor'] = 'display: none';
		if(gzte11(ISC_HUGEPRINT) && $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId() == 0 && $shipment['shipvendorid'] > 0) {
			$GLOBALS['HideVendor'] = '';
			$vendorCache = $GLOBALS['ISC_CLASS_DATA_STORE']->Read('Vendors');
			if(isset($vendorCache[$shipment['shipvendorid']])) {
				$vendor = $vendorCache[$shipment['shipvendorid']];
				$GLOBALS['VendorName'] = isc_html_escape($vendor['vendorname']);
				$GLOBALS['VendorId'] = $vendor['vendorid'];
				$GLOBALS['HideVendor'] = '';
			}
		}

		// Grab all of the products in the shipment
		$GLOBALS['ProductsTable'] = "<table width=\"95%\" align=\"center\" border=\"0\" cellspacing=0 cellpadding=0>";
		$query = "
			SELECT s.*, p.prodname
			FROM [|PREFIX|]shipment_items s
			LEFT JOIN [|PREFIX|]products p ON (p.productid=s.itemprodid)
			WHERE shipid='".(int)$shipment['shipmentid']."'
			ORDER BY itemprodname
		";
		$result = $GLOBALS['ISC_CLASS_DB']->Query($query);
		while($product = $GLOBALS['ISC_CLASS_DB']->Fetch($result)) {
			$GLOBALS['ProductSKU'] = '';
			if($product['itemprodsku']) {
				$GLOBALS['ProductSKU'] = "<br /><em>" . isc_html_escape($product['itemprodsku']) . "</em>";
			}

			if($product['prodname']) {
				$product['itemprodname'] = "<a href='".ProdLink($product['prodname'])."' target='_blank'>".isc_html_escape($product['itemprodname'])."</a>";
			}
			else {
				$product['itemprodname'] = isc_html_escape($product['itemprodname']);
			}
			$GLOBALS['ProductName'] = $product['itemprodname'];

			$GLOBALS['ProductOptions'] = '';
			if($product['itemprodoptions'] != '') {
				$options = @unserialize($product['itemprodoptions']);
				if(!empty($options)) {
					$GLOBALS['ProductOptions'] = "<blockquote style=\"padding-left: 10px; margin: 0;\">";
					$comma = '';
					foreach($options as $name => $value) {
						$GLOBALS['ProductOptions'] .= $comma.isc_html_escape($name).": ".isc_html_escape($value);
						$comma = '<br />';
					}
					$GLOBALS['ProductOptions'] .= "</blockquote>";
				}
			}

			$GLOBALS['EventDate']='';
			if ($product['itemprodeventdate'] != null) {
				$GLOBALS['EventDate'] = '<tr><td style="padding:5px 0px 5px 15px; font-style:italic">('.$product['itemprodeventname'] . ': ' . isc_date('jS M Y', $product['itemprodeventdate']) . ')</tr>';
			}

			$GLOBALS['ProductQty'] = $product['itemqty'];

			$GLOBALS['ProductsTable'] .= $GLOBALS['ISC_CLASS_TEMPLATE']->GetSnippet('ShipmentQuickViewItem');
		}

		$GLOBALS['ShipmentComments'] = '';
		if (trim($shipment['shipcomments']) != '') {
			$GLOBALS['ShipmentComments'] = nl2br(isc_html_escape($shipment['shipcomments']));
		}
		else {
			$GLOBALS['HideShipmentComments'] = 'display: none';
		}

		$GLOBALS['ISC_CLASS_TEMPLATE']->SetTemplate('shipments.quickview');
		return $GLOBALS['ISC_CLASS_TEMPLATE']->ParseTemplate(true);
	}
}