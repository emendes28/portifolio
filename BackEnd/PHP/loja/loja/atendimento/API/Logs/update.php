<?php
	/*****  ServiceLogs::update  *****************************
	 *
	 *  $Id: update.php,v 1.3 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_UPDATE_ServiceLogs_LOADED ) == true )
		return ;

	$_OFFICE_UPDATE_ServiceLogs_LOADED = true ;

	/*****  ServiceLogs_update_ChatRequestStatus  *********************
	 *
	 *  History:
	 *	Kory Cline				Nov 8, 2001
	 *
	 *****************************************************************/
	FUNCTION ServiceLogs_update_ChatRequestStatus( &$dbh,
					  $requestid,
					  $status )
	{
		if ( $requestid == "" )
		{
				return false ;
		}
		$requestid = database_mysql_quote( $requestid ) ;
		$status = database_mysql_quote( $status ) ;

		$query = "UPDATE chatrequests SET status = '$status' WHERE requestID = $requestid" ;
		database_mysql_query( $dbh, $query ) ;
		
		if ( $dbh[ 'ok' ] )
		{
			return true ;
		}
		return false ;
	}

?>
