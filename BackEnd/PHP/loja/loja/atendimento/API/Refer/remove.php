<?php
	/*****  ServiceRefer::remove  ***************************************
	 *
	 *  $Id: remove.php,v 1.3 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_REMOVE_ServiceRefer_LOADED ) == true )
		return ;

	$_OFFICE_REMOVE_ServiceRefer_LOADED = true ;

	/*****  ServiceRefer_remove_OldRefer  ***************************
	 *
	 *  History:
	 *	Holger				March 3, 2002
	 *
	 *****************************************************************/
	FUNCTION ServiceRefer_remove_OldRefer( &$dbh,
						$aspid )
	{
		$aspid = database_mysql_quote( $aspid ) ;
		$expired = time() - (60*60*24*10) ;

		$query = "DELETE FROM chatrefer WHERE created < $expired" ;
		database_mysql_query( $dbh, $query ) ;

		if ( $dbh[ 'ok' ] )
		{
			return true ;
		}
		return true ;
	}

?>