<?php
	/*******************************************************
	* Atendimento Online
	*******************************************************/
	session_start() ;
	if ( isset( $_SESSION['session_setup'] ) ) { $session_setup = $_SESSION['session_setup'] ; } else { HEADER( "location: ../../setup/index.php" ) ; exit ; }
	include_once( "../../API/Util_Dir.php" ) ;
	if ( !Util_DIR_CheckDir( "../..", $session_setup['login'] ) )
	{
		HEADER( "location: ../../setup/options.php" ) ;
		exit ;
	}
	include_once("../../web/conf-init.php");
	$DOCUMENT_ROOT = realpath( preg_replace( "/http:/", "", $DOCUMENT_ROOT ) ) ;
	include_once("$DOCUMENT_ROOT/web/$session_setup[login]/$session_setup[login]-conf-init.php") ;
	include_once("$DOCUMENT_ROOT/API/sql.php" ) ;
	include_once("$DOCUMENT_ROOT/system.php") ;
	include_once("$DOCUMENT_ROOT/lang_packs/$LANG_PACK.php") ;
	include_once("$DOCUMENT_ROOT/web/VERSION_KEEP.php") ;
	include_once("$DOCUMENT_ROOT/API/ASP/update.php") ;
	include_once("$DOCUMENT_ROOT/API/Users/get.php") ;
	include_once("$DOCUMENT_ROOT/admin/traffic/APIknowledge/Util.php") ;
	include_once("$DOCUMENT_ROOT/admin/traffic/APIknowledge/get.php") ;
	include_once("$DOCUMENT_ROOT/admin/traffic/APIknowledge/put.php") ;
	include_once("$DOCUMENT_ROOT/admin/traffic/APIknowledge/remove.php") ;
	include_once("$DOCUMENT_ROOT/admin/traffic/APIknowledge/update.php") ;
	$section = 9;			// Section number - see header.php for list of section numbers

	$css_path = "../../" ;
?>
<?php

	// initialize
	$action = $error_mesg = "" ;
	$deptid = $success = 0 ;

	// get variables
	if ( isset( $_POST['action'] ) ) { $action = $_POST['action'] ; }
	if ( isset( $_GET['action'] ) ) { $action = $_GET['action'] ; }
	if ( isset( $_POST['deptid'] ) ) { $deptid = $_POST['deptid'] ; }
	if ( isset( $_GET['deptid'] ) ) { $deptid = $_GET['deptid'] ; }
	if ( isset( $_POST['success'] ) ) { $success = $_POST['success'] ; }
	if ( isset( $_GET['success'] ) ) { $success = $_GET['success'] ; }

	$nav_line = "<a href=\"knowledge.php\" class=\"nav\">:: Previous</a>" ;
	if ( preg_match( "/(create_cat)|(create_question)|(edit_cat)|(edit_quest)/", $action ) )
		$nav_line = "<a href=\"knowledge_config.php?action=config\" class=\"nav\">:: Previous</a>" ;

	if ( preg_match( "/(MSIE)|(Gecko)/", $_SERVER['HTTP_USER_AGENT'] ) )
	{
		$text_width = "50" ;
		$select_width = "300" ;
	}
	else
	{
		$text_width = "25" ;
		$select_width = "300" ;
	}
?>
<?php
	// functions
?>
<?php
	// conditions

	if ( $action == "do_create_cat" )
	{
		LIST( $deptid, $parentid ) = explode( "<:>", $_POST['category'] ) ;
		Knowledge_put_Category( $dbh, $session_setup['aspID'], $deptid, $parentid, $_POST['name'], $_POST['order'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
	else if ( $action == "do_create_question" )
	{
		LIST( $deptid, $parentid ) = explode( "<:>", $_POST['category'] ) ;
		Knowledge_put_Question( $dbh, $session_setup['aspID'], $deptid, $parentid, $_POST['question'], $_POST['answer'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
	else if ( $action == "remove_quest" )
	{
		Knowledge_remove_Question( $dbh, $session_setup['aspID'], $_GET['questid'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
	else if ( $action == "remove_cat" )
	{
		Knowledge_remove_Category( $dbh, $session_setup['aspID'], $_GET['catid'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
	else if ( $action == "status" )
	{
		$total_questions = Knowledge_get_TotalASPQuestions( $dbh, $session_setup['aspID'] ) ;
		if ( $total_questions || !$_GET['status'] )
		{
			AdminASP_update_TableValue( $dbh, $session_setup['aspID'], "knowledgebase", $_GET['status'] ) ;
			$_SESSION['session_setup']['knowledgebase'] = $_GET['status'] ;
			HEADER( "location: knowledge_config.php?success=1" ) ;
			exit ;
		}
		else
			$error_mesg = "A sua Base de Conhecimento est� vazia. <a href=\"knowledge_config.php?action=config\">Clique Aqui e configure a sua Base de Conhecimento</a>.<p>" ;
	}
	else if ( $action == "do_update_cat" )
	{
		Knowledge_update_Category( $dbh, $session_setup['aspID'], $_POST['catid'], $_POST['name'], $_POST['order'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
	else if ( $action == "do_update_question" )
	{
		Knowledge_update_Question( $dbh, $session_setup['aspID'], $_POST['questid'], $_POST['question'], $_POST['answer'] ) ;
		HEADER( "location: knowledge_config.php?action=config" ) ;
		exit ;
	}
?>
<?php include_once("$DOCUMENT_ROOT/setup/header.php") ; ?>
<script language="JavaScript">
<!--
	function do_save_cat()
	{
		catindex = document.form.category.selectedIndex ;
		if ( document.form.name.value == "" )
			alert( "Todos os campos marcados com * precisam ser preenchidos." ) ;
		else if ( catindex < 0 )
			alert( "Selecione uma categoria." ) ;
		else
			document.form.submit() ;
	}

	function do_update_cat()
	{
		if ( document.form.name.value == "" )
			alert( "Todos os campos marcados com * precisam ser preenchidos." ) ;
		else
			document.form.submit() ;
	}

	function do_save_question()
	{
		catindex = document.form.category.selectedIndex ;
		if ( ( document.form.question.value == "" ) || ( document.form.answer.value == "" ) )
			alert( "Todos os campos marcados com * precisam ser preenchidos." ) ;
		else if ( catindex < 0 )
			alert( "Selecione uma categoria." ) ;
		else
			document.form.submit() ;
	}

	function do_update_question()
	{
		if ( ( document.form.question.value == "" ) || ( document.form.answer.value == "" ) )
			alert( "Todos os campos marcados com * precisam ser preenchidos." ) ;
		else
			document.form.submit() ;
	}

	function remove_question( questid )
	{
		if ( confirm( "Deletar a Pergunta?" ) )
			location.href = "knowledge_config.php?action=remove_quest&questid="+questid ;
	}

	function remove_cat( catid )
	{
		if ( confirm( "Deletar a Categoria?" ) )
		{
			if ( confirm( "Ser&atilde;o deletadas todas as subcategorias e perguntas desta categoria! Deseja Continuar?" ) )
				location.href = "knowledge_config.php?action=remove_cat&catid="+catid ;
		}
	}

	function check_visible( value )
	{
		if ( !( value.indexOf("(hidden)") == -1 ) )
			alert( "Aten&ccedil;&atilde;o: Este departamento est&aacute; escondido. A base de conhecimento n&atilde;o ser&aacute; vis&iacute;vel ao p&uacute;blico." ) ;
	}
//-->
</script>

<table width="100%" border="0" cellspacing="0" cellpadding="15">
<tr>
  <td width="15%" valign="top" align="center"><img src="../../images/basecg.png" /></td> 
  <td width="100%" valign="top">

	<?php if ( $action == "optimize" ): ?>
		<p><span class="title">Base de Conhecimento: Otimiza&ccedil;&atilde;o</span><br>
		View common KB search terms performed by your visitors and optimize your system to serve up results or related keywords.  You can also correct common misspellings.
		<p>
		<span class="hilight">* It's crucial to display results or related terms because these visitors are directly interacting with your website and are highly interested in your service/product.</span>
		<br>
	<?php elseif ( $action ): ?>
		<p><span class="title">Base de Conhecimento: Configura&ccedil;&atilde;o</span><br>
		Insira as categorias, perguntas, respostas e configure a sua base conhecimento.</p>
	<?php else: ?>
		<p><span class="title">Base de Conhecimento: Prefer&ecirc;ncias</span><br>
		Selecione o Status da sua Base de Conhecimento.   <?php echo ( isset( $success ) && $success ) ? "<font color=\"#29C029\"><big><b>Atualizado Com Sucesso!</b></big></font>" : "" ?>		</p>
	<?php endif ; ?>




	<?php
		if ( $action == "create_cat" ):
		$departments = AdminUsers_get_AllDepartments( $dbh, $session_setup['aspID'], 1 ) ;
	?>
	<span class="basicTitle">Criar Nova Categoria</span><br>
	Criar uma nova categoria para a sua base de conhecimento.

	<form method="POST" action="knowledge_config.php" name="form">
	<input type="hidden" name="action" value="do_create_cat">
	<table cellspacing=0 cellpadding=2 border=0 width="100%">
	<tr class="altcolor2"">
		<td valign="top">Departamento e Categoria <font color="#FF0000">*</font></td>
		<td valign="top"><span class="basetxt">
			<select name="category" size=13 style="width:<?php echo $select_width ?>" OnClick=check_visible(this.value)>
			<!-- <option value="0<:>0" selected>- Create in all Departments</option> -->
			<?php
				for ( $c = 0; $c < count( $departments ); ++$c )
				{
					$department = $departments[$c] ;

					$name = stripslashes( $department['name'] ) ;

					$display_string = "" ;
					if ( !$department['visible'] )
						$display_string = "(hidden)" ;

					print "<option value=\"$department[deptID]<:>0<:>$display_string\">- $name $display_string</option>" ;

					$deptcats = Knowledge_get_DeptCats( $dbh, $session_setup['aspID'], $department['deptID'] ) ;
					for ( $c2 = 0; $c2 < count( $deptcats ); ++$c2 )
					{
						$department2 = $deptcats[$c2] ;
						$name = stripslashes( $department2['name'] ) ;
						print "<option value=\"$department[deptID]<:>$department2[catID]\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - $name</option>" ;

						UtilKnowledge_PrintSubCats( $dbh, $session_setup['aspID'], $department2['catID'], 0 ) ;
					}
				}
			?>
			</select>
		</td>
	</tr>
	<tr class="altcolor2"">
		<td>Nome da Categoria <font color="#FF0000">*</font></td>
		<td><input type="text" name="name" size="<?php echo $text_width ?>" maxlength="255"></td>
	</tr>
	<tr class="altcolor2"">
		<td>Ordem de Exibi&ccedil;&atilde;o <font color="#FF0000">*</font></td>
		<td><input type="text" name="order" size=2 maxlength="3" value=1 onKeyPress="return numbersonly(event)"> 
		(apenas n&uacute;meros)</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="button" OnClick="do_save_cat()" class="mainButton" value="Salvar Categoria"> <input type="button" OnClick="location.href='knowledge_config.php?action=config'" class="mainButton" value="Cancelar"></td>
	</tr>
	</table>
	</form>
	



	<?php
		elseif ( $action == "create_question" ):
		$departments = AdminUsers_get_AllDepartments( $dbh, $session_setup['aspID'], 1 ) ;
	?>
	<span class="basicTitle">Criar Nova Pergunta e Resposta</span><br>

	<form method="POST" action="knowledge_config.php" name="form">
	<input type="hidden" name="action" value="do_create_question">
	<table cellspacing=0 cellpadding=2 border=0 width="100%">
	<tr class="altcolor2"">
		<td valign="top">Selecionar Categoria <font color="#FF0000">*</font></td>
		<td valign="top"><span class="basetxt">
			<select name="category" size=6 style="width:<?php echo $select_width ?>" OnClick=check_visible(this.value)>
			<?php
				for ( $c = 0; $c < count( $departments ); ++$c )
				{
					$department = $departments[$c] ;

					$name = stripslashes( $department['name'] ) ;

					$display_string = "" ;
					if ( !$department['visible'] )
						$display_string = "(hidden)" ;

					print "<option value=\"$department[deptID]<:>0<:>$display_string\">- $name $display_string</option>" ;

					$deptcats = Knowledge_get_DeptCats( $dbh, $session_setup['aspID'], $department['deptID'] ) ;
					for ( $c2 = 0; $c2 < count( $deptcats ); ++$c2 )
					{
						$department2 = $deptcats[$c2] ;
						$name = stripslashes( $department2['name'] ) ;
						print "<option value=\"$department[deptID]<:>$department2[catID]\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - $name</option>" ;

						UtilKnowledge_PrintSubCats( $dbh, $session_setup['aspID'], $department2['catID'], 0 ) ;
					}
				}
			?>
			</select>
		</td>
	</tr>
	<tr class="altcolor2"">
		<td>Pergunta <font color="#FF0000">*</font></td>
		<td><input type="text" name="question" size="<?php echo $text_width ?>" maxlength="255"></td>
	</tr>
	<tr class="altcolor2"">
		<td>Resposta <font color="#FF0000">*</font><br>(HTML ok)</td>
		<td><textarea cols="<?php echo $text_width ?>" rows=10 class="input" name="answer" wrap="virtual"></textarea></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="button" OnClick="do_save_question()" class="mainButton" value="Criar"> <input type="button" OnClick="location.href='knowledge_config.php?action=config'" class="mainButton" value="Cancelar"></td>
	</tr>
	</table>
	</form>









	<?php elseif ( $action == "config" ): ?>

		<?php if ( AdminUsers_get_TotalDepartments( $dbh, $session_setup['aspID'] ) > 0 ): ?>
		<table cellspacing=0 cellpadding=2 border=0>
		<tr>
			<td><a href="knowledge_config.php?action=create_cat"><img src="<?php echo $BASE_URL ?>/images/knowledge/folder_closed.gif" border=0 alt=""></td>
			<td><a href="knowledge_config.php?action=create_cat">Criar Nova Categoria</a></td>
		</tr>
		<tr>
			<td><a href="knowledge_config.php?action=create_question"><img src="<?php echo $BASE_URL ?>/images/knowledge/document.gif" border=0 alt=""></td>
			<td><a href="knowledge_config.php?action=create_question">Criar Nova Pergunta e Resposta</a></td>
		</tr>
		</table>
		<p>
		<table cellspacing=0 cellpadding=0 border=0 width="100%">
		<tr>
			<td class="hdash">&nbsp;</td>
		</tr>
		</table>
		Se o visitante avaliar a resposta como �til, um ponto ser� adicionado ao Index da Base de Conhecimento. Se o visitante avaliar a resposta como n&atilde;o �til um ponto ser� subtraido do Index da Base de Conhecimento. <br />
	  O Index da Base de Conhecimento seleciona a ordem de exibi��o das Perguntas e Respostas.
		<?php else: ?>
	  <span class="hilight">Antes de configurar uma Base de Conhecimento voc&ecirc; precisa <a href="<?php echo $BASE_URL ?>/setup/adddept.php">Criar um Departamento no Sistema</a>.</span><br>
		<?php endif ; ?>
		<p>
	<?php
		$l = $x = 0 ;
		$departments = AdminUsers_get_AllDepartments( $dbh, $session_setup['aspID'], 1 ) ;

		if ( ( count( $departments ) > 0 ) && !$session_setup['knowledgebase'] )
			print "<span class=\"hilight\">A sua Base de Conhecimento n&atilde;o est&aacute; dispon&iacute;vel para o p&uacute;blico.  <a href=\"knowledge_config.php\">Clique Aqui</a> para exibir sua base conhecimento para o p&uacute;blico.</span><p>" ;

		for ( $c = 0; $c < count( $departments ); ++$c )
		{
			$department = $departments[$c] ;

			$name = stripslashes( $department['name'] ) ;
			$display_string = "" ;
			if ( !$department['visible'] )
				$display_string = "(hidden)" ;

			print "<ul><b>$name $display_string</b>" ;

			$questions = Knowledge_get_CatQuestions( $dbh, $session_setup['aspID'], $department['deptID'], 0, 0 ) ;
			for ( $q = 0; $q < count( $questions ); ++$q )
			{
				UtilKnowledge_PrintQuestionAdmin( $questions[$q] ) ;
			}

			$deptcats = Knowledge_get_DeptCats( $dbh, $session_setup['aspID'], $department['deptID'] ) ;
			for ( $c2 = 0; $c2 < count( $deptcats ); ++$c2 )
			{
				$category = $deptcats[$c2] ;

				$name = stripslashes( $category['name'] ) ;
				print "<ul><b>$name</b> [<a href=\"knowledge_config.php?action=edit_cat&catid=$category[catID]\">editar</a>] [<a href=\"JavaScript:remove_cat( $category[catID] )\">remover</a>]" ;

				$questions = Knowledge_get_CatQuestions( $dbh, $session_setup['aspID'], $category['deptID'], $category['catID'], 0 ) ;
				for ( $q = 0; $q < count( $questions ); ++$q )
				{
					UtilKnowledge_PrintQuestionAdmin( $questions[$q] ) ;
				}
				UtilKnowledge_PrintSubCatsFolderAdmin( $dbh, $session_setup['aspID'], $category['catID'], 0 ) ;
				print "</ul>" ;
			}
			print "</ul>" ;
		}
	?>









	<?php
		elseif ( $action == "edit_cat" ):
		$catinfo = Knowledge_get_CatInfo( $dbh, $session_setup['aspID'], $_GET['catid'] ) ;
	?>
	<span class="basicTitle">Editar Categoria</span><br>

	<form method="POST" action="knowledge_config.php" name="form">
	<input type="hidden" name="action" value="do_update_cat">
	<input type="hidden" name="catid" value="<?php echo $_GET['catid'] ?>">
	<table cellspacing=0 cellpadding=2 border=0 width="100%">
	<tr class="altcolor2"">
		<td>Nome da Categoria <font color="#FF0000">*</font></td>
		<td><input type="text" name="name" size="<?php echo $text_width ?>" maxlength="255" value="<?php echo preg_replace( "/\"/", "&quot;", stripslashes( $catinfo['name'] ) ) ?>"></td>
	</tr>
	<tr class="altcolor2"">
		<td>Ordem de Exibi&ccedil;&atilde;o <font color="#FF0000">*</font></td>
		<td><input type="text" name="order" size=2 maxlength="3" onKeyPress="return numbersonly(event)" value="<?php echo $catinfo['display_order'] ?>">		  
		   (apenas n&uacute;meros)</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="button" OnClick="do_update_cat()" class="mainButton" value="Atualizar Categoria"> <input type="button" OnClick="location.href='knowledge_config.php?action=config'" class="mainButton" value="Cancelar"></td>
	</tr>
	</table>
	</form>








	<?php
		elseif ( $action == "edit_quest" ):
		$question = Knowledge_get_QuestInfo( $dbh, $session_setup['aspID'], $_GET['questid'] ) ;
	?>
	<span class="basicTitle">Editar Pergunta e Resposta</span><br>

	<form method="POST" action="knowledge_config.php" name="form">
	<input type="hidden" name="action" value="do_update_question">
	<input type="hidden" name="questid" value="<?php echo $_GET['questid'] ?>">
	<table cellspacing=0 cellpadding=2 border=0 width="100%">
	<tr class="altcolor2"">
		<td>Pergunta <font color="#FF0000">*</font></td>
		<td><input type="text" name="question" size="<?php echo $text_width ?>" maxlength="255" value="<?php echo preg_replace( "/\"/", "&quot;", stripslashes( $question['question'] ) ) ?>"></td>
	</tr>
	<tr class="altcolor2"">
		<td>Resposta <font color="#FF0000">*</font><br>(HTML ok)</td>
		<td><textarea cols="55" rows=10 class="input" name="answer" wrap="virtual"><?php echo stripslashes( $question['answer'] ) ?></textarea></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="button" OnClick="do_update_question()" class="mainButton" value="Atualizar"> <input type="button" OnClick="location.href='knowledge_config.php?action=config'" class="mainButton" value="Cancelar"></td>
	</tr>
	</table>
	</form>








	<?php
		elseif ( $action == "optimize" ):
		$searchterms = Knowledge_get_SearchTerms( $dbh, $session_setup['aspID'] ) ;
	?>
	<p>
	<span class="hilight"><?php echo $error_mesg ?></span>
	<table cellspacing=1 cellpadding=2 border=0 width="100%">
	<form method="GET" action="knowledge_config.php">
	<tr>
		<th align="left">Searched</th>
		<th align="left">Counter</th>
		<th align="left" colspan=2>Correct Spelling</th>
		<th align="left" colspan=2>Related Terms<br>* separate terms with a comma (,)</th>
	</tr>
	<input type="hidden" name="action" value="status">
	<?php
		for ( $c = 0; $c < count( $searchterms ); ++$c )
		{
			$term = $searchterms[$c] ;
			$keyword = stripslashes( $term['searchterm'] ) ;

			$class = "class=\"altcolor1\"" ;
			if ( $c % 2 )
				$class = "class=\"altcolor2\"" ;

			print "
				<tr $class>
					<td>$keyword</td>
					<td>$term[counter]</td>
					<td>correction: </td>
					<td><input type=\"text\" name=\"correction[$term[searchID]]\" size=15 maxlength=255></td>
					<td>related: </td>
					<td><input type=\"text\" name=\"related[$term[searchID]]\" size=25 maxlength=255></td>
				</tr>
			" ;
		}
	?>
	</form>
	</table>









	<?php
		else:
		$total_questions = Knowledge_get_TotalASPQuestions( $dbh, $session_setup['aspID'] ) ;

		$warning = "" ;
		if ( !$total_questions )
			$warning = "<br><span class=\"hilight\">Aten&ccedil;&atilde;o</span> - A sua Base de Conhecimento est&aacute; vazia. <a href=\"knowledge_config.php?action=config\">Configure Aqui a Sua Base de Conhecimento</a>." ;
	?>
	<p>
	<span class="hilight"><?php echo $error_mesg ?></span>
	<table cellspacing=0 cellpadding=2 border=0>
	<form method="GET" action="knowledge_config.php">
	<input type="hidden" name="action" value="status">
	<tr>
		<td><input type="radio" value=1 name="status" <?php echo ( $session_setup['knowledgebase'] ) ? "checked" : "" ?>> 
		Dispon&iacute;vel ao P&uacute;blico <?php echo $warning ?></td>
	</tr>
	<tr>
		<td><input type="radio" value=0 name="status" <?php echo ( !$session_setup['knowledgebase'] ) ? "checked" : "" ?>> 
		Indispon&iacute;vel ao P&uacute;blico (N&atilde;o aparecer&aacute; para os visitantes)</td>
	</tr>
	<tr>
		<td><br><input type="submit" value="Atualizar Status" class="mainButton"></td>
	</tr>
	</form>
	</table>




	<?php endif ; ?>
	
	</td>
</tr>
</table>

<?php include_once( "$DOCUMENT_ROOT/setup/footer.php" ) ; ?>