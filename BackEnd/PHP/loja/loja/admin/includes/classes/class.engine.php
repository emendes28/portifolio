<?php

	class ISC_ADMIN_ENGINE
	{
		public $stylesheets = array();
		public $lang = array();

		public function HandlePage()
		{
			// Should we redirect to the setup script?
			if (GetConfig('isSetup') == false) {
				header("Location: index.php");
				die();
			}

			if (isset($_REQUEST['ToDo'])) {
				$ToDo = $_REQUEST['ToDo'];
			} else {
				$ToDo = "";
			}

			if (isset($_COOKIE['RememberToken']) && !isset($_GET['ToDo']) && !isset($_COOKIE['logout'])) {
				$_POST['remember'] = "1";
				$GLOBALS['ISC_CLASS_ADMIN_AUTH']->ProcessLogin();
				die();
			} else {
				if (!isset($_COOKIE["STORESUITE_CP_TOKEN"]) && $ToDo != "processLogin" && $ToDo != "forgotPass" && $ToDo != "sendPassEmail" && $ToDo != "confirmPasswordChange" && $ToDo != "firstTimeLogin" && $ToDo != "drawLogo") {
					unset($_COOKIE['logout']);
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->DoLogin();
					die();
				}
			}

			// Get the permissions for this user
			$arrPermissions = $GLOBALS["ISC_CLASS_ADMIN_AUTH"]->GetPermissions();

			switch ($ToDo) {
				case 'processLogin':
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->ProcessLogin();
					break;
				case 'forgotPass':
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->ForgotPass();
					break;
				case 'confirmPasswordChange':
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->ConfirmPass();
					break;
				case 'sendPassEmail':
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->SendForgotPassEmail();
					break;
				case 'logOut':
					$GLOBALS['ISC_CLASS_ADMIN_AUTH']->LogOut();
					break;
				case 'HelpRSS':
					$this->LoadHelpRSS();
					break;
				default:
				{
					if (!in_arrays($ToDo)) {
						// No permissions? Log them out and throw them to the login page
						if (empty($arrPermissions)) {
							$GLOBALS['ISC_CLASS_ADMIN_AUTH']->LogOut();
							die();
						}

						if (!empty($ToDo)) {
							$GLOBALS['ISC_CLASS_ADMIN_AUTH']->HandleSTSToDo($ToDo);
						}
						else {
							$class = GetClass('ISC_ADMIN_INDEX');
							$class->HandleToDo();
						}
					}
				}
			}
		}

		public function LoadHelpRSS()
		{
			$expires = 86400; // 24 hr
			$modified = time();

			header("Last-Modified: " . gmdate("r", $modified));
			header("Pragma: public");
			header("Cache-control: public,maxage=" . $expires);
			header("Expires: " . gmdate("r", $modified + $expires));

			if(!GetConfig('LoadPopularHelpArticles')) {
				exit;
			}

			$GLOBALS['ISC_CLASS_PAGE'] = GetClass('ISC_PAGE');
			$contents = $GLOBALS['ISC_CLASS_PAGE']->_LoadFeed(GetConfig('HelpRSS'), 5, 86400, "admin-help.xml","PageRSSItemHelp", true);

			if ($contents === false) {
				$expires = 300;
				header("Cache-control: public,maxage=" . $expires);
				header("Expires: " . gmdate("r", $modified + $expires));
				echo GetLang('ErrorLoadingFeed');
				return;
			}

			echo "<ul>";
			echo $contents;
			echo "</ul>";
		}


		public function DoHomePage($MsgDesc = "", $MsgStatus = "")
		{
			if($MsgDesc) {
				FlashMessage($MsgDesc, $MsgStatus);
			}

			ob_end_clean();
			header('Location: index.php');
			exit;
		}

		public function DoError($MsgTitle = "", $MsgDesc = "", $MsgStatus = "")
		{
			if ($MsgTitle == "") {
				$GLOBALS['ErrorTitle'] = GetLang('Error');
			}
			else {
				$GLOBALS['ErrorTitle'] = $MsgTitle;
			}
			$GLOBALS['Message'] = MessageBox($MsgDesc, $MsgStatus);
			$this->PrintHeader();
			$GLOBALS["ISC_CLASS_TEMPLATE"]->SetTemplate("error");
			$GLOBALS["ISC_CLASS_TEMPLATE"]->ParseTemplate();
			$this->PrintFooter();
		}

		public function PrintHeader()
		{
			if (isset($this->DoneHeader)) {
				return;
			}

			if(isset($GLOBALS['LKN']) && $GLOBALS['LKN']) {
				$GLOBALS['WarningNotices'] = '<p class="WarningNotice">'.GetLang('ControlPanelLKNWarning').'</p>';
			}

			if(defined('CONTROL_PANEL_WARNING_MSG') && CONTROL_PANEL_WARNING_MSG != '') {
				$GLOBALS['WarningNotices'] = '<p class="WarningNotice">'.CONTROL_PANEL_WARNING_MSG.'</p>';
			}

			if (!empty($GLOBALS['WarningNotices'])) {
				$GLOBALS['WarningNotices'] .= '<br /><br />';
			}

			$this->DoneHeader = true;

			$GLOBALS['AdditionalStylesheets'] = '';
			foreach($this->stylesheets as $stylesheet) {
				// Add caching token
				if(strpos($stylesheet, '?') === false) {
					$stylesheet .= '?';
				}
				else {
					$stylesheet .= '&';
				}
				$stylesheet .= getConfig('JSCacheToken');
				$GLOBALS['AdditionalStylesheets'] .= "@import url('".$stylesheet."');";
			}

			$GLOBALS['DefineLanguageVars'] = '';
			foreach($this->lang as $langVar) {
				$GLOBALS['DefineLanguageVars'] .= "lang." . $langVar . " = '"  . addcslashes($GLOBALS['ISC_LANG'][$langVar], "'") . "';\n";
			}

			$GLOBALS['textLinks'] = "";
			$GLOBALS['menuRow'] = "";
			$GLOBALS['menuScript'] = "";
			$GLOBALS['menuTable'] = "";

			$user = $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetUser();
			
			$agorinha = isc_mktime();
			$GLOBALS['Agora'] = $agorinha;
			$GLOBALS['Antes'] = $agorinha-2603856;

			$GLOBALS['CurrentlyLoggedInAs'] = sprintf(GetLang('CurrentlyLoggedInAs'), isc_html_escape($user['username']));

			if ($GLOBALS["ISC_CLASS_ADMIN_AUTH"]->IsLoggedIn()) {
				// Get an array of permissions for the selected user
				$arrPermissions = $GLOBALS["ISC_CLASS_ADMIN_AUTH"]->GetPermissions();

				$GLOBALS['textLinks'] = "<div class='MenuText'>";

				if(gzte11(ISC_HUGEPRINT)) {
					$usersMenu = array(
						'text' => GetLang('Users'),
						'show' => in_array(AUTH_Manage_Users, $arrPermissions) || in_array(AUTH_Manage_Vendors, $arrPermissions),
						'items' => array(
							array(
								'link' => 'index.php?ToDo=viewUsers',
								'text' => GetLang('Users'),
								'show' => in_array(AUTH_Manage_Users, $arrPermissions)
							),
							array(
								'link' => 'index.php?ToDo=viewVendors',
								'text' => GetLang('Vendors'),
								'show' => in_array(AUTH_Manage_Vendors, $arrPermissions) && !$GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId()
							),
							array(
								'link' => 'index.php?ToDo=editVendor&vendorId='.$GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId(),
								'text' => GetLang('VendorProfile'),
								'show' => $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetVendorId()
							),
						)
					);
				}
				else {
					$usersMenu = array(
						'link' => 'index.php?ToDo=viewUsers',
						'text' => GetLang('Users'),
						'show' => in_array(AUTH_Manage_Users, $arrPermissions)
					);
				}
				$menuItems = array(
					'mnuHome' => array(
						'link' => 'index.php',
						'text' => GetLang('Home')
					),
					/*'mnuAddons' => array(
						'link' => 'index.php?ToDo=viewDownloadAddons',
						'text' => GetLang('Addons'),
						'show' => (GetConfig('DisableAddons') == false && in_array(AUTH_Manage_Addons, $arrPermissions)),
						'items' => array(
							array(
								'link' => 'index.php?ToDo=viewDownloadAddons',
								'text' => GetLang('ViewAddons'),
								'id'	=> 'ViewAddonsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewAddonSettings',
								'text' => GetLang('AddonSettings'),
								'id'	=> 'AddonSettingsLink'
							),
						)
					),
					'mnuTemplates' => array(
						'link' => 'index.php?ToDo=viewTemplates',
						'text' => GetLang('Templates'),
						'show' => in_array(AUTH_Manage_Templates, $arrPermissions)
					),*/
					'mnuUsers' => $usersMenu,
					'mnuTools' => array(
						'link' => '',
						'text' => GetLang('Tools'),
						'items' => array(
							array(
								'link' => 'index.php?ToDo=viewBackups',
								'text' => GetLang('ViewBackups'),
								'show' => (!GetConfig('DisableBackupSettings') && in_array(AUTH_Manage_Backups, $arrPermissions) && gzte11(ISC_MEDIUMPRINT)),
								'id'	=> 'DisableBackupSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewFormFields',
								'text' => GetLang('FormFields'),
								'show' => (in_array(AUTH_Manage_FormFields, $arrPermissions) || in_array(AUTH_Add_FormFields, $arrPermissions)),
								'id'	=> 'FormFieldsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewVendorPayments',
								'text' => GetLang('VendorPayments'),
								'show' => in_array(AUTH_Manage_Vendors, $arrPermissions) && gzte11(ISC_HUGEPRINT),
								'id'	=> 'VendorPaymentsLink'
							),

							/*
							array(
								'link' => 'index.php?ToDo=viewExportTemplates',
								'text' => GetLang('ExportTemplates'),
								'show' => gzte11(ISC_MEDIUMPRINT),
								'id'	=> 'ExportTemplatesLink'
							),
							array(
								'break' => true
							),*/
							array(
								'link' => 'index.php?ToDo=systemLog',
								'text' => GetLang('StoreLogs'),
								'show' => in_array(AUTH_Manage_Logs, $arrPermissions),
								'id'	=> 'StoreLogsLink'
							),
							array(
								'link' => 'index.php?ToDo=systemInfo',
								'text' => GetLang('SystemInfo'),
								'show' => in_array(AUTH_System_Info, $arrPermissions) && !GetConfig('DisableSystemInfo'),
								'id'	=> 'StoreLogsLink'
							),
							array(
								'link' => 'index.php?ToDo=Suporte',
								'text' => 'Suporte Clientes',
								'show' => in_array(AUTH_System_Info, $arrPermissions) && !GetConfig('DisableSystemInfo'),
								'id'	=> 'StoreLogsLink'
							)
						)
					),
					/*
					'mnuSettings' => array(
						'link' => '',
						'text' => GetLang('Settings'),
						'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						'items' => array(
							array(
								'link' => 'index.php?ToDo=viewSettings',
								'text' => GetLang('StoreSettings'),
								'id'	=> 'StoreSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewShippingSettings',
								'text' => GetLang('ShippingSettings'),
								'id'	=> 'ShippingSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewTaxSettings',
								'text' => GetLang('TaxSettings'),
								'id'	=> 'TaxSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewCurrencySettings',
								'text' => GetLang('CurrencySettings'),
								'id'	=> 'CurrencySettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewCheckoutSettings',
								'text' => GetLang('CheckoutSettings'),
								'id'	=> 'CheckoutSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewAccountingSettings',
								'text' => GetLang('AccountingSettings'),
								'show' => gzte11(ISC_MEDIUMPRINT),
								'id'	=> 'AccountingSettingsLink'
							),

							array(
								'link' => 'index.php?ToDo=viewGiftCertificateSettings',
								'text' => GetLang('GiftCertificateSettings'),
								'show' => gzte11(ISC_LARGEPRINT),
								'id'	=> 'GiftCertificateSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewAnalyticsSettings',
								'text' => GetLang('AnalyticsSettings'),
								'id'	=> 'AnalyticsSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewAffiliateSettings',
								'text' => GetLang('AffiliateSettings'),
								'id'	=> 'AffiliateSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewNotificationSettings',
								'text' => GetLang('NotificationSettings'),
								'id'	=> 'NotificationSettingsLink'

							),
							array(
								'link' => 'index.php?ToDo=viewLiveChatSettings',
								'text' => GetLang('LiveChatSettings'),
								'id'	=> 'LiveChatSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewReturnsSettings',
								'text' => GetLang('ReturnsSettings'),
								'show' => gzte11(ISC_LARGEPRINT),
								'id'	=> 'ReturnsSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewGiftWrapping',
								'text' => GetLang('GiftWrappingSettings'),
								'id'	=> 'GiftWrappingSettingsLink'
							),
							array(
								'break' => true,
								'show' => (!GetConfig('DisableSendStudioIntegration') || !GetConfig('DisableKnowledgeManagerIntegration'))
							),
							array(
								'link' => 'index.php?ToDo=viewMailSettings',
								'text' => GetLang('MailSettings'),
								'show' => !GetConfig('DisableSendStudioIntegration'),
								'id'	=> 'MailSettingsLink'
							),
							array(
								'link' => 'index.php?ToDo=viewKBSettings',
								'text' => GetLang('KBSettings'),
								'show' => !GetConfig('DisableKnowledgeManagerIntegration'),
								'id'	=> 'KBSettingsLink'
							)
						)
					),*/
					'mnuViewStore' => array(
						'link' => GetConfig('ShopPathNormal').'/index.php',
						'target' => '_blank',
						'text' => GetLang('ViewStore')
					),


				);

				// Now that we've loaded the default menu, let's check if there are any addons we need to load
				$this->_LoadAddons($menuItems);

				$first = true;
				foreach($menuItems as $id => $menuDetails) {
					$hasItems = false;
					if(isset($menuDetails['show']) && !$menuDetails['show']) {
						continue;
					}
					if(!isset($menuDetails['items'])) {
						$hasItems = true;
						$target = '';
						if (isset($menuDetails['target'])) {
							$target = ' target="'.$menuDetails['target'].'"';
						}
						$menuContent = '<a href="'.$menuDetails['link'].'" class="MenuText"'.$target.' id="'.$id.'MenuButton">'.$menuDetails['text'].'</a>';
					}
					else {
						$menuContent = '<a href="#" class="PopDownMenu MenuText" id="'.$id.'MenuButton">'.$menuDetails['text'].'<img src="images/arrow_down_white.gif" border="0" /></a>';
						$menuContent .= '<div id="'.$id.'Menu" class="DropDownMenu DropShadow" style="display: none; width: 140px;"><ul>';
						$insertBreak = '';
						$hasChildren = false;
						foreach($menuDetails['items'] as $k => $subMenuItem) {
							if(isset($subMenuItem['show']) && !$subMenuItem['show']) {
								continue;
							}
							if(isset($subMenuItem['break'])) {
								if($hasChildren && isset($menuDetails['items'][$k+1])) {
									$insertBreak = '<li class="Break"><hr /></li>';
								}
								if(!isset($subMenuItem['text'])) {
									continue;
								}
							}
							$hasItems = true;
							$hasChildren = true;
							// Add the sub menu item to the menu
							$menuContent .= $insertBreak;
							$insertBreak = '';

							$target = '';
							if (isset($subMenuItem['target'])) {
								$target = ' target="'.$subMenuItem['target'].'"';
							}

							$menuEleID = '';
							if(isset($subMenuItem['id'])) {
								$menuEleID = ' id="'.$subMenuItem['id'].'"';
							}
							$menuContent .= '<li><a href="'.$subMenuItem['link'].'" class="MenuTextDrop"' . $target .$menuEleID. '>'.$subMenuItem['text'].'</a></li>';
						}
						$menuContent .= "</ul></div>\n";
					}
					if($hasItems) {
						if(!$first) {
							$GLOBALS['textLinks'] .= '|';
						}
						$GLOBALS['textLinks'] .= $menuContent."\n";
					}
					$first = false;
				}

				$GLOBALS['textLinks'] .= '</div>';

				// Tell them who they're logged in as
				if (isset($_COOKIE['userId']) && is_numeric($_COOKIE['userId'])) {
					$user = $GLOBALS['ISC_CLASS_ADMIN_AUTH']->GetUser();
					$GLOBALS['textLinks'] .= '<br /><div class="LoggedInAs">' . sprintf(GetLang('LoggedInAs'), $user['username']) . '</div>';
				}

				// Build the menu tabs
				$GLOBALS['menuRow'] = $this->_BuildTabMenu();
			}

			else {
				$GLOBALS['menuRow'] = "<tr><td colspan=3 height=\"33\">&nbsp;</td></tr>";
			}

			// Build the breadcrumb trail
			$GLOBALS['BreadcrumbTrail'] = $this->_BuildBreadcrumbTrail();

			if(!$GLOBALS['BreadcrumbTrail']) {
				$GLOBALS['HideBreadcrumb'] = 'display: none';
			}

			// Is there an info tip to be shown on this page?
			if (isset($GLOBALS['InfoTip'])) {
				$GLOBALS['InfoTip'] = sprintf("<p class=\"InfoTip\">%s</p>", $GLOBALS['InfoTip']);
			}

			if(!ech0(GetConfig('serverStamp'))) {
				$GLOBALS['RTLStyles'] = "<script type=\"text/javascript\">var in_app = true;</script>";
			}

			$GLOBALS['AdminLogo'] = GetConfig('AdminLogo');
			$GLOBALS['ControlPanelTitle'] = str_ireplace('%%EDITION%%', $GLOBALS['AppEdition'], GetConfig('ControlPanelTitle'));

			$GLOBALS['ProductName'] = addslashes(GetConfig('ProductName'));

			// Define the favicon link (Added when fixing ISC-218)
			$GLOBALS['FaviconPath'] = GetConfig('ShopPath') . '/' . GetConfig('ImageDirectory') . '/' . GetConfig('Favicon');

			$GLOBALS["ISC_CLASS_TEMPLATE"]->SetTemplate("pageheader");
			$GLOBALS["ISC_CLASS_TEMPLATE"]->ParseTemplate();
		}

		public function PrintFooter()
		{
			if(GetConfig('DebugMode') == 1) {
				$end_time = microtime_float();
				$GLOBALS['ScriptTime'] = number_format($end_time - ISC_START_TIME, 4);
				$GLOBALS['QueryCount'] = $GLOBALS['ISC_CLASS_DB']->NumQueries;
				if (function_exists('memory_get_peak_usage')) {
					$GLOBALS['MemoryPeak'] = "Memory usage peaked at ".NiceSize(memory_get_peak_usage(true));
				} else {
					$GLOBALS['MemoryPeak'] = '';
				}

				if (isset($_REQUEST['debug'])) {
					echo "<ol class='QueryList' style='font-size: 13px;'>\n";
					foreach ($GLOBALS['ISC_CLASS_DB']->QueryList as $query) {
						echo "<li style='line-height: 1.4; margin-bottom: 4px;'>".isc_html_escape($query['Query'])." &mdash; <em>".number_format($query['ExecutionTime'], 4)."seconds</em></li>\n";
					}
					echo "</ol>";
				}
				$GLOBALS['DebugDetails'] = "<p>Page built in ".$GLOBALS['ScriptTime']."s with ".$GLOBALS['QueryCount']." queries. ".$GLOBALS['MemoryPeak']."</p>";
			}
			else {
				$GLOBALS['DebugDetails'] = '';
			}
			$GLOBALS['AdminCopyright'] = str_replace('%%EDITION%%', $GLOBALS['AppEdition'], GetConfig('AdminCopyright'));

			$GLOBALS["ISC_CLASS_TEMPLATE"]->SetTemplate("pagefooter");
			$GLOBALS["ISC_CLASS_TEMPLATE"]->ParseTemplate();
		}

		private function _BuildBreadcrumbTrail()
		{
			$trail = "";
			$count = 0;
			if (isset($GLOBALS['BreadcrumEntries']) && is_array($GLOBALS['BreadcrumEntries'])) {
				foreach ($GLOBALS['BreadcrumEntries'] as $label=>$url) {
					if($count == 0) {
						$addClass = ' class="Home"';
						$homeIcon = ' <div class="HomeIcon"></div>';
					} else {
						$addClass = '';
						$homeIcon = '';
					}

					if ($count++ < count($GLOBALS['BreadcrumEntries'])-1) {
						$trail .= '<li' . $addClass . '><a href="' . $url . '">' . $homeIcon . $label . '</a></li>';
					} else {
						$trail .= '<li' . $addClass . '><span>' . $label . '</span></li>';
					}
				}
			}

			return $trail;
		}


		private function _LoadAddons(&$MenuItems)
		{
			$enabled_addons = GetSetupAddonsModules();
			$arrPermissions = $GLOBALS["ISC_CLASS_ADMIN_AUTH"]->GetPermissions();

			foreach($enabled_addons as $addon) {
				foreach($addon['object']->menuItems as $menuItem) {
					// Menu item doesn't exist
					if(!isset($MenuItems[$menuItem['location']])) {
						continue;
					}

					$parentMenu = &$MenuItems[$menuItem['location']];
					if(!isset($parentMenu['items'])) {
						$parentMenu['items'] = array();
					}

					$insertBreak = false;
					if(isset($menuItem['break']) && $menuItem['break'] == true) {
						$insertBreak = true;
					}

					$menuItemPermissions = true;
					if($addon['object']->GetPermissionId() && !in_array($addon['object']->GetPermissionId(), $arrPermissions)) {
						$menuItemPermissions = false;
					}

					if(!isset($menuItem['link'])) {
						$menuItem['link'] = 'index.php?ToDo=runAddon&addon=' . $addon['object']->GetId();
					}

					if(!isset($menuItem['description'])) {
						$menuItem['description'] = '';
					}

					if(!isset($menuItem['icon'])) {
						$menuItem['icon'] = '';
					}

					$addonMenu = array(
						'text' => $menuItem['text'],
						'icon' => $menuItem['icon'],
						'help' => $menuItem['description'],
						'link' => $menuItem['link'],
						'show' => $menuItemPermissions,
						'is_addon' => true,
						'break' => $insertBreak,
						'id' => $menuItem['id']
					);

					$parentMenu['items'][] = $addonMenu;
				}
			}
		}

		private function _BuildTabMenu()
		{

			$menu = "";

			// Get an array of permissions for the selected user
			$arrPermissions = $GLOBALS["ISC_CLASS_ADMIN_AUTH"]->GetPermissions();

			$show_manage_products = in_array(AUTH_Manage_Products, $arrPermissions)
				|| in_array(AUTH_Manage_Reviews, $arrPermissions)
				|| in_array(AUTH_Create_Product, $arrPermissions)
				|| in_array(AUTH_Import_Products, $arrPermissions);

			$show_manage_categories = in_array(AUTH_Manage_Categories, $arrPermissions)
				|| in_array(AUTH_Create_Category, $arrPermissions);

			$show_manage_orders = in_array(AUTH_Manage_Orders, $arrPermissions)
				|| in_array(AUTH_Add_Orders, $arrPermissions)
				|| in_array(AUTH_Export_Orders, $arrPermissions)
				|| in_array(AUTH_Manage_Returns, $arrPermissions);

			$show_import_tracking_number = in_array(AUTH_Manage_Orders, $arrPermissions)
				&& in_array(AUTH_Import_Order_Tracking_Numbers, $arrPermissions)
				&& gzte11(ISC_MEDIUMPRINT);

			$show_manage_customers = in_array(AUTH_Manage_Customers, $arrPermissions)
				|| in_array(AUTH_Add_Customer, $arrPermissions)
				|| in_array(AUTH_Import_Customers, $arrPermissions);


			if (GetConfig('MailXMLAPIValid') && GetConfig('UseMailerForNewsletter') && GetConfig('MailNewsletterList') > 0) {
				$mailer_link = str_replace("xml.php", "admin", GetConfig('MailXMLPath'));
				$subscriber_link = sprintf("javascript:LaunchMailer('%s')", $mailer_link);
			} else {
				$subscriber_link = "javascript:Common.ExportNewsletterSubscribers()";
			}

			$menuItems = array (
				'mnuOrders' => array (
					'match' => array('order', 'shipment'),
					'items' => array(
						array (
							'id'   => 'SubMenuViewOrders',
							'text' => GetLang('ViewOrders'),
							'help' => GetLang('ViewOrdersMenuHelp'),
							'icon' => 'order.gif',
							'link' => 'index.php?ToDo=viewOrders',
							'show' => $show_manage_orders,
						),
						array (
							'id'   => 'SubMenuAddAnOrder',
							'text' => GetLang('AddAnOrder'),
							'help' => GetLang('AddOrderMenuHelp'),
							'icon' => 'order_add.gif',
							'link' => 'index.php?ToDo=addOrder',
							'show' => in_array(AUTH_Add_Orders, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuSearchOrders',
							'text' => GetLang('SearchOrders'),
							'help' => GetLang('SearchOrdersMenuHelp'),
							'icon' => 'find.gif',
							'link' => 'index.php?ToDo=searchOrders',
							'show' => $show_manage_orders,
						),
						array (
							'id'   => 'SubMenuExportOrders',
							'text' => GetLang('ExportOrdersMenu'),
							'help' => GetLang('ExportOrdersMenuHelp'),
							'icon' => 'export.gif',
							'link' => 'index.php?ToDo=startExport&t=orders',
							'show' => in_array(AUTH_Export_Orders, $arrPermissions) && gzte11(ISC_MEDIUMPRINT)
						),
						array(
							'id'   => 'SubMenuViewShipments',
							'text' => GetLang('ViewShipments'),
							'help' => GetLang('ViewShipmentsHelp'),
							'icon' => 'shipments.gif',
							'link' => 'index.php?ToDo=viewShipments',
							'show' => $show_manage_orders
						),
						array (
							'id'   => 'SubMenuViewReturns',
							'text' => GetLang('ViewReturns'),
							'help' => GetLang('ViewReturnsMenuHelp'),
							'icon' => 'return.gif',
							'link' => 'index.php?ToDo=viewReturns',
							'show' => in_array(AUTH_Manage_Returns, $arrPermissions) && GetConfig('EnableReturns') && gzte11(ISC_LARGEPRINT),
						),
						array (
							'id'   => 'SubMenuImportTrackingNum',
							'text' => GetLang('ImportOrdertrackingnumbers'),
							'help' => GetLang('ImportOrdertrackingnumbersMenuHelp'),
							'icon' => 'import.gif',
							'link' => 'index.php?ToDo=importOrdertrackingnumbers',
							'show' => $show_import_tracking_number,
						),
					),
				),
				'mnuCustomers' => array (
					'match' => 'customer',
					'items' => array(
						array (
							'id'   => 'SubMenuViewCustomers',
							'text' => GetLang('ViewCustomers'),
							'help' => GetLang('ViewCustomersMenuHelp'),
							'icon' => 'customer.gif',
							'link' => 'index.php?ToDo=viewCustomers',
							'show' => $show_manage_customers,
						),
						array (
							'id'   => 'SubMenuAddCustomers',
							'text' => GetLang('AddCustomers'),
							'help' => GetLang('AddCustomersMenuHelp'),
							'icon' => 'customers_add.gif',
							'link' => 'index.php?ToDo=addCustomer',
							'show' => in_array(AUTH_Add_Customer, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuCustomerGroups',
							'text' => GetLang('CustomerGroups'),
							'help' => GetLang('CustomerGroupsMenuHelp'),
							'icon' => 'customer_group.gif',
							'link' => 'index.php?ToDo=viewCustomerGroups',
							'show' => in_array(AUTH_Customer_Groups, $arrPermissions) && gzte11(ISC_MEDIUMPRINT),
						),
						array (
							'id'   => 'SubMenuSearchCustomers',
							'text' => GetLang('SearchCustomers'),
							'help' => GetLang('SearchCustomersMenuHelp'),
							'icon' => 'find.gif',
							'link' => 'index.php?ToDo=searchCustomers',
							'show' => $show_manage_customers,
						),
						array (
							'id'   => 'SubMenuImportCustomers',
							'text' => GetLang('ImportCustomers'),
							'help' => GetLang('ImportCustomersMenuHelp'),
							'icon' => 'import.gif',
							'link' => 'index.php?ToDo=importCustomers',
							'show' => in_array(AUTH_Import_Customers, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuExportCustomers',
							'text' => GetLang('ExportCustomersMenu'),
							'help' => GetLang('ExportCustomersMenuHelp'),
							'icon' => 'export.gif',
							'link' => 'index.php?ToDo=startExport&t=customers',
							'show' => in_array(AUTH_Export_Customers, $arrPermissions) && gzte11(ISC_MEDIUMPRINT)
						),
					),
				),
				'mnuProducts' => array (
					'match' => array('product', 'review', 'categor', 'brand'),
					'items' => array(
						array (
							'id'   => 'SubMenuViewProducts',
							'text' => GetLang('ViewProducts'),
							'help' => GetLang('ViewProductsMenuHelp'),
							'icon' => 'product.gif',
							'link' => 'index.php?ToDo=viewProducts',
							'show' => $show_manage_products,
						),
						array (
							'id'   => 'SubMenuAddProduct',
							'text' => GetLang('AddProduct'),
							'help' => GetLang('AddProductMenuHelp'),
							'icon' => 'product_add.gif',
							'link' => 'index.php?ToDo=addProduct',
							'show' => in_array(AUTH_Create_Product, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuViewCategories',
							'text' => GetLang('ViewCategories'),
							'help' => GetLang('ViewCategoriesMenuHelp'),
							'icon' => 'category.gif',
							'link' => 'index.php?ToDo=viewCategories',
							'show' => $show_manage_categories,
						),
						array (
							'id'   => 'SubMenuProductVariations',
							'text' => GetLang('ProductVariations'),
							'help' => GetLang('ProductVariationsMenuHelp'),
							'icon' => 'product_variation.gif',
							'link' => 'index.php?ToDo=viewProductVariations',
							'show' => in_array(AUTH_Manage_Variations, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuSearchProducts',
							'text' => GetLang('SearchProducts'),
							'help' => GetLang('SearchProductsMenuHelp'),
							'icon' => 'find.gif',
							'link' => 'index.php?ToDo=searchProducts',
							'show' => $show_manage_products,
						),
						array (
							'id'   => 'SubMenuImportProducts',
							'text' => GetLang('ImportProducts'),
							'help' => GetLang('ImportProductsMenuHelp'),
							'icon' => 'import.gif',
							'link' => 'index.php?ToDo=importProducts',
							'show' => in_array(AUTH_Import_Products, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuImportProductVariations',
							'text' => GetLang('ImportProductVariations'),
							'help' => GetLang('ImportProductVariationsHelp'),
							'icon' => 'import.gif',
							'link' => 'index.php?ToDo=importProductVariations',
							'show' => in_array(AUTH_Import_Products, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuExportProducts',
							'text' => GetLang('ExportProductsMenu'),
							'help' => GetLang('ExportProductsMenuHelp'),
							'icon' => 'export.gif',
							'link' => 'index.php?ToDo=startExport&t=products',
							'show' => in_array(AUTH_Export_Products, $arrPermissions) && gzte11(ISC_MEDIUMPRINT)
						),
						array (
							'id'   => 'SubMenuManageReviews',
							'text' => GetLang('ManageReviews'),
							'help' => GetLang('ViewReviewsMenuHelp'),
							'icon' => 'comment_view.gif',
							'link' => 'index.php?ToDo=viewReviews',
							'show' => in_array(AUTH_Manage_Reviews, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuViewBrands',
							'text' => GetLang('ViewBrands'),
							'help' => GetLang('ViewBrandsHelp'),
							'icon' => 'brand_menu.gif',
							'link' => 'index.php?ToDo=viewBrands',
							'show' => in_array(AUTH_Manage_Brands, $arrPermissions),
						),
					),
				),
				'mnuContent' => array (
					'match' => array('news', 'page'),
					'ignore' => array('vendor'),
					'items' => array(
						array (
							'id'   => 'SubMenuViewNews',
							'text' => GetLang('ViewNews'),
							'help' => GetLang('ViewNewsMenuHelp'),
							'icon' => 'news.gif',
							'link' => 'index.php?ToDo=viewNews',
							'show' => in_array(AUTH_Manage_News, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuAddNews',
							'text' => GetLang('AddNews'),
							'help' => GetLang('AddNewsMenuHelp'),
							'icon' => 'news_add.gif',
							'link' => 'index.php?ToDo=addNews',
							'show' => in_array(AUTH_Manage_News, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuViewWebPages',
							'text' => GetLang('ViewWebPages'),
							'help' => GetLang('ViewWebPagesMenuHelp'),
							'icon' => 'page.gif',
							'link' => 'index.php?ToDo=viewPages',
							'show' => in_array(AUTH_Manage_Pages, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuCreateAWebPage',
							'text' => GetLang('CreateAWebPage'),
							'help' => GetLang('CreateWebPageMenuHelp'),
							'icon' => 'page_add.gif',
							'link' => 'index.php?ToDo=createPage',
							'show' => in_array(AUTH_Manage_Pages, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuImageManager',
							'text' => GetLang('ImageManagerMenu'),
							'help' => GetLang('ImageManagerMenuIntro'),
							'icon' => 'pictures.png',
							'link' => 'index.php?ToDo=manageImages',
							'show' => in_array(AUTH_Manage_Images, $arrPermissions)
						)
					),
				),
				'mnuMarketing' => array (
					'match' => array('coupon', 'banner', 'discount', 'optimizer'),
					'items' => array(
						array (
							'id'   => 'SubMenuViewBanners',
							'text' => GetLang('ViewBanners'),
							'help' => GetLang('ViewBannersMenuHelp'),
							'icon' => 'banner.gif',
							'link' => 'index.php?ToDo=viewBanners',
							'show' => in_array(AUTH_Manage_Banners, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuViewCoupons',
							'text' => GetLang('ViewCoupons'),
							'help' => GetLang('ViewCouponsMenuHelp'),
							'icon' => 'coupon.gif',
							'link' => 'index.php?ToDo=viewCoupons',
							'show' => in_array(AUTH_Manage_Coupons, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuViewGiftCertificates',
							'text' => GetLang('ViewGiftCertificates'),
							'help' => GetLang('ViewGiftCertificatesMenuHelp'),
							'icon' => 'giftcertificate.gif',
							'link' => 'index.php?ToDo=viewGiftCertificates',
							'show' => in_array(AUTH_Manage_GiftCertificates, $arrPermissions) && gzte11(ISC_LARGEPRINT),
						),
						array (
							'id'   => 'SubMenuGoogleWebsiteOptimizer',
							'text' => GetLang('GoogleWebsiteOptimizer'),
							'help' => GetLang('GoogleWebsiteOptimizerHelp'),
							'icon' => 'google.gif',
							'link' => 'index.php?ToDo=manageOptimizer',
							'show' => in_array(AUTH_Website_Optimizer, $arrPermissions),
						),

						array (
							'id'   => 'SubMenuCreateFroogleFeed',
							'text' => GetLang('CreateFroogleFeed'),
							'help' => GetLang('GoogleProductsFeedMenuHelp'),
							'icon' => 'google.gif',
							'link' => 'javascript:Common.ExportGoogleBase()',
							'show' => in_array(AUTH_Export_Froogle, $arrPermissions),
						),


						array (
							'id'   => 'SubMenuViewDiscounts',
							'text' => GetLang('ViewDiscounts'),
							'help' => GetLang('ViewDiscountsMenuHelp'),
							'icon' => 'discountrule.gif',
							'link' => 'index.php?ToDo=viewDiscounts',
							'show' => in_array(AUTH_Manage_Discounts, $arrPermissions) && gzte11(ISC_MEDIUMPRINT),
						),
						
						array (
							'id'   => 'SubMenuNewsletterSubscribers',
							'text' => GetLang('NewsletterSubscribers'),
							'help' => GetLang('ViewSubscribersMenuHelp'),
							'icon' => 'subscriber.gif',
							'link' => $subscriber_link,
							'show' => in_array(AUTH_Newsletter_Subscribers, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuGoogleSitemap',
							'text' => GetLang('GoogleSitemap'),
							'help' => GetLang('GoogleSitemapHelp'),
							'icon' => 'google.gif',
							'link' => 'javascript:Common.DisplayGoogleSitemapInfo()',
							'show' => in_array(AUTH_View_XMLSitemap, $arrPermissions),
						),
					),
				),
				'mnuStatistics' => array (
					'match' => 'stats',
					'items' => array(
						array (
							'id'   => 'SubMenuStoreOverview',
							'text' => GetLang('StoreOverview'),
							'help' => GetLang('StoreOverviewMenuHelp'),
							'icon' => 'stats_overview.gif',
							'link' => 'index.php?ToDo=viewStats',
							'show' => in_array(AUTH_Statistics_Overview, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuOrderStatistics',
							'text' => GetLang('OrderStatistics'),
							'help' => GetLang('OrderStatsMenuHelp'),
							'icon' => 'stats_orders.gif',
							'link' => 'index.php?ToDo=viewOrdStats',
							'show' => in_array(AUTH_Statistics_Orders, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuProductStatistics',
							'text' => GetLang('ProductStatistics'),
							'help' => GetLang('ProductStatsMenuHelp'),
							'icon' => 'stats_products.gif',
							'link' => 'index.php?ToDo=viewProdStats',
							'show' => in_array(AUTH_Statistics_Products, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuCustomerStatistics',
							'text' => GetLang('CustomerStatistics'),
							'help' => GetLang('CustomerStatsMenuHelp'),
							'icon' => 'stats_customers.gif',
							'link' => 'index.php?ToDo=viewCustStats',
							'show' => in_array(AUTH_Statistics_Customers, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuSearchStatistics',
							'text' => GetLang('SearchStatistics'),
							'help' => GetLang('SearchStatsHelp'),
							'icon' => 'stats_search.gif',
							'link' => 'index.php?ToDo=viewSearchStats',
							'show' => in_array(AUTH_Statistics_Search, $arrPermissions),
						),
					),
				),
				/////////////////////
				'mnuConfiguracoes' => array (
					'match' => array('settings','templates'),
					'items' => array(
						array (
							'id'   => 'SubMenuConfiguracoes',
							'text' => GetLang('Opcoes'),
							'help' => GetLang('OpcoesHelp'),
							'icon' => 'opcoes.gif',
							'link' => 'index.php?ToDo=viewSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuTemplates',
							'text' => GetLang('Lay'),
							'help' => GetLang('LayHelp'),
							'icon' => 'tema.gif',
							'link' => 'index.php?ToDo=viewTemplates',
							'show' => in_array(AUTH_Manage_Templates, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuFrete',
							'text' => GetLang('OpcoesFrete'),
							'help' => GetLang('OpcoesFreteHelp'),
							'icon' => 'frete.gif',
							'link' => 'index.php?ToDo=viewShippingSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuPag',
							'text' => GetLang('OpcoesPag'),
							'help' => GetLang('OpcoesPagHelp'),
							'icon' => 'frete.gif',
							'link' => 'index.php?ToDo=viewCheckoutSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuAdon',
							'text' => GetLang('OpcoesAdon'),
							'help' => GetLang('OpcoesAdonHelp'),
							'icon' => 'frete.gif',
							'link' => 'index.php?ToDo=viewAddonSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
                                               array (
							'id'   => 'SubMenuAdon',
                                                        'target' => '_blank',							
                                                        'text' => 'Atendimento on-line',
							'help' => 'Instalar ou configurar Atendimento on-line',
							'icon' => 'cog.gif',
							'link' => '../atendimento/setup/index.php',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuImposto',
							'text' => GetLang('OpcoesImposto'),
							'help' => GetLang('OpcoesImpostoHelp'),
							'icon' => 'imposto.gif',
							'link' => 'index.php?ToDo=viewTaxSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuMoedas',
							'text' => GetLang('OpcoesMoedas'),
							'help' => GetLang('OpcoesMoedasHelp'),
							'icon' => 'moedas.gif',
							'link' => 'index.php?ToDo=viewCurrencySettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuValePresente',
							'text' => GetLang('OpcoesPresente'),
							'help' => GetLang('OpcoesPresenteHelp'),
							'icon' => 'presente.gif',
							'link' => 'index.php?ToDo=viewGiftCertificateSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuAnalises',
							'text' => GetLang('Ana'),
							'help' => GetLang('AnaHelp'),
							'icon' => 'analises.gif',
							'link' => 'index.php?ToDo=viewAnalyticsSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuAfiliados',
							'text' => GetLang('Afi'),
							'help' => GetLang('AfiHelp'),
							'icon' => 'afiliados.gif',
							'link' => 'index.php?ToDo=viewAffiliateSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuNotificacoes',
							'text' => GetLang('Notf'),
							'help' => GetLang('NotfHelp'),
							'icon' => 'notificacao.gif',
							'link' => 'index.php?ToDo=viewNotificationSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuAtendimento',
							'text' => GetLang('Atend'),
							'help' => GetLang('AtendHelp'),
							'icon' => 'atendimento.gif',
							'link' => 'index.php?ToDo=viewLiveChatSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuDevolucoes',
							'text' => 'Devolu��es',
							'help' => 'Configure op��es de devolu��o de produtos.',
							'icon' => 'devolucoes.gif',
							'link' => 'index.php?ToDo=viewReturnsSettings',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),

						),
						array (
							'id'   => 'SubMenuEmbalagens',
							'text' => 'Embrulhos',
							'help' => 'Op��es de embrulhos e embalagens de entrega.',
							'icon' => 'embalagens.gif',
							'link' => 'index.php?ToDo=viewGiftWrapping',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),

					),
					
								

				),
				'mnuExtras' => array (
					'match' => array('users','Vendor','backups','formfields','systemlog','systeminfo'),
					'items' => array(
						array (
							'id'   => 'SubMenuUsuarios',
							'target' => '_self',
                                                        'text' => 'Usuarios',
							'help' => 'Edite, adicione ou d� permi��es aos usuarios da loja.',
							'icon' => 'usuarios.gif',
							'link' => 'index.php?ToDo=viewUsers',
							'show' => in_array(AUTH_Manage_Users, $arrPermissions),
						),
                                                array (
							'id'   => 'SubMenuVendedor',
                                                        'target' => '_self',							
                                                        'text' => 'Vendedor',
							'help' => 'Edite, adicione ou d� permi��es aos vendedores da loja.',
							'icon' => 'usuarios.gif',
							'link' => 'index.php?ToDo=addVendor',
							'show' => in_array(AUTH_Manage_Users, $arrPermissions),
						),
                                                array (
							'id'   => 'SubMenuSuporte',
                                                        'target' => '_blank',							
                                                        'text' => 'Atendimento',
							'help' => 'Iniciar atendimento on-line.',
							'icon' => 'usuarios.gif',
							'link' => '../atendimento/index.php',
							'show' => in_array(AUTH_Manage_Users, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuBackups',
							'target' => '_self',
                                                        'text' => 'Backups',
							'help' => 'Crie Backups de seguran�a de banco de dados e imagens da loja.',
							'icon' => 'backup.gif',
							'link' => 'index.php?ToDo=viewBackups',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuFormulario',
							'target' => '_self',
                                                        'text' => 'Campos e Formulario',
							'help' => 'Edite campos ou crie novos nas areas de cadastro da loja.',
							'icon' => 'form.gif',
							'link' => 'index.php?ToDo=viewFormFields',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuLogs',
							'target' => '_self',
                                                        'text' => 'Logs de Acesso',
							'help' => 'Logs e registros de acessos e modifica��es do sistema.',
							'icon' => 'log.gif',
							'link' => 'index.php?ToDo=systemLog',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						array (
							'id'   => 'SubMenuInfor',
                                                        'target' => '_self',							
                                                        'text' => 'Informa��es do Sistema',
							'help' => 'Veja informa��es do sistema como vers�o de softs e outros.',
							'icon' => 'infor.gif',
							'link' => 'index.php?ToDo=systemInfo',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
					),

				),
				'mnuSair' => array (
					'match' => 'sair',
					'items' => array(
						array (
							'id'   => 'SubMenuSair',
                                                        'target' => '_self', 	
							'text' => 'Sair',
							'help' => 'Clique aqui para fechar a sess�o e sair da loja.',
							'icon' => 'usuarios.gif',
							'link' => 'index.php?ToDo=logOut',
							'show' => in_array(AUTH_Manage_Users, $arrPermissions),
						),
                                                array (
							'id'   => 'SubMenuVerLoja',
							'target' => '_blank',
							'text' => 'Ver Loja',
							'help' => 'Clique aqui para acessar sua loja virtual.',
							'icon' => 'loja.gif',
							'link' => '../index.php',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),						
                                                 array (
							'id'   => 'SubMenuDesenvolvedores',
							'target' => '_blank',
							'text' => 'Desenvolvedores da Loja',
							'help' => 'Acesse o site dos criadores da loja.',
							'icon' => 'cl.gif',
							'link' => 'http://www.cliquemania.com',
							'show' => in_array(AUTH_Manage_Settings, $arrPermissions),
						),
						
					),

				),
				
				///////////////////////
			);

			// Now that we've loaded the default menu, let's check if there are any addons we need to load
			$this->_LoadAddons($menuItems);

			$imagesDir = dirname(__FILE__).'/../../images';

			$menu = "\n".'<div id="Menu">'."\n".'<ul>'."\n";
			foreach ($menuItems as $tabName => $link) {

				// By default we wont highlight this tab
				$highlight_tab = false;

				if ($link['match'] && isset($_REQUEST['ToDo'])) {
					// If the URI matches the "match" index, we'll highlight the tab

					$page = @isc_strtolower($_REQUEST['ToDo']);

					if(isset($GLOBALS['HighlightedMenuItem']) && $GLOBALS['HighlightedMenuItem'] == $tabName) {
						$highlight_tab = true;
					}

					// Does it need to match mutiple words?
					if (is_array($link['match'])) {
						foreach ($link['match'] as $match_it) {
							if ($match_it == "") {
								continue;
							}

							if (is_numeric(isc_strpos($page, isc_strtolower($match_it)))) {
								$highlight_tab = true;
							}
						}
					} else {
						if (is_numeric(isc_strpos($page, $link['match']))) {
							$highlight_tab = true;
						}
					}

					if(isset($link['ignore']) && is_array($link['ignore'])) {
						foreach($link['ignore'] as $ignore) {
							if(isc_strpos($page, strtolower($ignore)) !== false) {
								$highlight_tab = false;
							}
						}
					}
				}

				// If the menu has sub menus, display them
				if (is_array($link['items'])) {

					$firstItem = true;
					$mainMenuLink = '';
					$subMenuList = '';
					foreach ($link['items'] as $id => $sub) {
						if (is_numeric($id)) {
							// If the child is forbidden by law, hide it
							if (@!$sub['show']) {
								continue;
							}

							if($firstItem) {
								//make the main menu link as the first menu item
								$mainMenuLink = $sub['link'];
								$firstItem = false;
							}

							$GLOBALS['SubMenuId'] = $sub['id'];
							$GLOBALS['SubMenuURL'] = $sub['link'];
							$GLOBALS['SubMenuName'] = $sub['text'];
							$GLOBALS['SubMenuText'] = $sub['help'];
							$GLOBALS['ExtraClass'] = '';
							if (isset($sub['class'])) {
								$GLOBALS['ExtraClass'] = $sub['class'];
							}
							if (!empty($sub['target'])) {
								$GLOBALS['Target'] = @$sub['target'];
							}

							$subMenuList .= $GLOBALS['ISC_CLASS_TEMPLATE']->GetSnippet('SubMenuItem');

						}
					}


					//if at list one
					if($mainMenuLink != '') {
						if($subMenuList != '') {
							$GLOBALS['SubMenuList']="<ul style='display:none'>".$subMenuList."</ul>";
						}
						$GLOBALS['MenuTabId'] = $tabName;
						$GLOBALS['MenuActive'] = '';
						if ($highlight_tab) {
							$GLOBALS['MenuActive'] = "Active";
						}
						$GLOBALS['MenuURL'] = $mainMenuLink;

						$menuLangVar = str_replace('mnu', '', $tabName);

						$GLOBALS['MenuName'] = GetLang($menuLangVar);

						$menu .= $GLOBALS['ISC_CLASS_TEMPLATE']->GetSnippet('MenuItem');

					}
				}
			}

			$menu .= '</ul></div>'."\n";
			return $menu;
		}

		public function LoadLangFile($name)
		{
			$file = ISC_BASE_PATH.'/language/'.GetConfig('Language').'/admin/'.$name.'.ini';
			$GLOBALS['ISC_CLASS_TEMPLATE']->ParseLangFile($file);
		}

		public function MarkGettingStartedComplete($step)
		{
			// Already complete
			if(in_array($step, GetConfig('GettingStartedCompleted'))) {
				return false;
			}

			$GLOBALS['ISC_NEW_CFG']['GettingStartedCompleted'] = GetConfig('GettingStartedCompleted');
			$GLOBALS['ISC_NEW_CFG']['GettingStartedCompleted'][] = $step;

			$settings = GetClass('ISC_ADMIN_SETTINGS');
			$settings->CommitSettings();

			// Return false if getting started is disabled
			if(GetConfig('DisableGettingStarted')) {
				return false;
			}

			return true;
		}

	}