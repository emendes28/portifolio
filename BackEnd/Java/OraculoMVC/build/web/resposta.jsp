<%-- 
    Document   : resposta
    Created on : 16/02/2017, 18:56:01
    Author     : esimendes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Respostas dos melhores produtos</title>
    </head>
    <body>
        <h1>Os melhores produtos do tipo # ${param.produto} # são:</h1>
        <ul>
            <c:forEach var="item" items="${produtos}">                
            <li>${item}</li>
            </c:forEach>
        </ul>
    </body>
</html>
