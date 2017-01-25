<?php
	/*****  ServiceFootprintUnique::remove  ***************************************
	 *
	 *  $Id: remove.php,v 1.4 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_REMOVE_ServiceFootprintUnique_LOADED ) == true )
		return ;

	$_OFFICE_REMOVE_ServiceFootprintUnique_LOADED = true ;

	/*****  ServiceFootprintUnique_remove_IdleFootprints  ***************************
	 *
	 *  History:
	 *	Holger				March 3, 2002
	 *
	 *****************************************************************/
	FUNCTION ServiceFootprintUnique_remove_IdleFootprints( &$dbh,
						$aspid )
	{
		if ( $aspid == "" )
		{
			return false ;
		}
		$aspid = database_mysql_quote( $aspid ) ;
		$idle = time() - 20 ;
		global $FOOTPRINT_IDLE ;
		$idle = time() - $FOOTPRINT_IDLE ;

		$query = "DELETE FROM chatfootprintsunique WHERE updated < $idle" ;
		database_mysql_query( $dbh, $query ) ;

		return true ;
	}

?>
