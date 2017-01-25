<?php
	/*****  ServiceSurvey::put  ***************************************
	 *
	 *  $Id: put.php,v 1.6 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_PUT_ServiceSurvey_LOADED ) == true )
		return ;

	$_OFFICE_PUT_ServiceSurvey_LOADED = true ;

	include_once( "$DOCUMENT_ROOT/admin/traffic/APISurvey/update.php" ) ;

?>