<?php
	/*****  ServiceCanned::remove  ***************************************
	 *
	 *  $Id: remove.php,v 1.2 2005/02/05 12:03:47 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_REMOVE_ServiceCanned_LOADED ) == true )
		return ;

	$_OFFICE_REMOVE_ServiceCanned_LOADED = true ;

	/*****

	   Internal Dependencies

	*****/

	/*****

	   Module Specifics

	*****/

	/*****

	   Module Functions

	*****/

	/*****  ServiceCanned_remove_UserCanned  ************************************
	 *
	 *  History:
	 *	Kory Cline				Nov 12, 2001
	 *
	 *****************************************************************/
	FUNCTION ServiceCanned_remove_UserCanned( &$dbh,
						$userid,
						$cannedid )
	{
		if ( ( $userid == "" ) || ( $cannedid == "" ) )
		{
			return false ;
		}

		$query = "DELETE FROM chatcanned WHERE userID = $userid AND cannedID = $cannedid" ;
		database_mysql_query( $dbh, $query ) ;

		if ( $dbh[ 'ok' ] )
		{
			return true ;
		}

		return false ;
	}

?>
