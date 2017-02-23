var skills = ["programming","analist","developer","codding","research","consulting"];

var languagues = [{"name" : "portuguese", "proficiency": 100},
                  {"name" : "english", "proficiency": 60},
                  {"name" : "spanish", "proficiency": 40},
                  {"name" : "french", "proficiency": 10}];

var bio = {
    "name" : "Evandro de Santa Isabel Mendes",
    "role" : "System Analist",
    "contacts" : {
        "mobile" : "+55 71 999954459", 
        "email" : "evandrosimendes@gmail.com",
        "github" : "emendes28",
        "twitter" : "@emendes285",
        "location" : "Salvador"
    },
    "welcomeMessage" : "Full Stack Developer and interested in developing intelligent solutions for environmental and urban problems of cities in the world today",
    "skills": skills,
    "biopic" : "images/me.jpg",
    "display" : function () {        
        var formattedName,formattedRole,formatedWelcomeMsg, formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation,formattedBioPic,formattedSkill;

        formattedName = HTMLheaderName.replace("%data%",bio.name);
        formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
        formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        

        
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formatedWelcomeMsg);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);        
        $("#topContacts").append(formattedLocation);


            $("#header").append(HTMLskillsStart);
        for(skill in bio.skills){
            formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").prepend(formattedSkill);
        }
       
    }
};
bio.display();


var education = {
    "schools" : [
        {
            "name" : "Udacity",
            "location" : "Silicon Valey",
            "degree" : "Nanodegree",
            "majors" : ["FrontEnd"],
            "dates" : 2017,
            "url" : "https://udacity.com/"
        },
        {
            "name" : "UNIFACS",
            "location" : "Salvador",
            "degree" : "BA",
            "majors" : ["Engineer","Computer"],
            "dates" : "2010",
            "url" : "http://www.unifacs.br/"
        },
        {
            "name" : "Unijorge",
            "location" : "Salvador",
            "degree" : "BA",
            "majors" : ["Analist","Developement","Information Technology", "Information Systems"],
            "dates" : 2016,
            "url" : "http://www.unijorge.edu.br/"
        },
        {
            "name" : "EEEMBA",
            "location" : "Salvador",
            "degree" : "Techinical",
            "majors" : ["Techinical","Eletronic"],
            "dates" : 2008,
            "url" : "http://www.eeemba.br/"
        },
        {
            "name" : "Microlins",
            "location" : "Salvador",
            "degree" : "Techinical",
            "majors" : ["Techinical","Computer","Network","Hardware"],
            "dates" : 2007,
            "url" : "http://www.microlins.com.br/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Agil Developement with Advanced Java",
            "school" : "Instituto Tecnológico de Aeronáutica - ITA",
            "dates" : "February 2017 - March 2012",
            "url" : "https://www.coursera.org/learn/desenvolvimento-agil-com-java-avancado/home/welcome"
        },
        {
            "title" : "TDD – Developement of software drive for tests",
            "school" : "Instituto Tecnológico de Aeronáutica - ITA",
            "dates" : "February 2017 - March 2012",
            "url" : "https://www.coursera.org/learn/tdd-desenvolvimento-de-software-guiado-por-testes/home/welcome"
        },
        {
            "title" : "Scrum Fundamentals Certified",
            "school" : "SCRUMstudy - Accreditation Body for Scrum and Agile;Download Free Scrum Body of Knowledge(340 pages), License 567148",
            "dates" : "February 2017 ",
            "url" : "http://www.scrumstudy.com/scrum-master-certification.asp"
        },
        {
            "title" : "HTML5 - Homologado pelo W3C",
            "school" : "Microsoft",
            "dates" : "February 2017 ",
            "url" : "https://drive.google.com/open?id=0B92AeDAoseReMTNncUlVQ2lWY2M"
        },
        {
            "title" : "Introduced of NodeJS with Typescript in Visual Studio Code",
            "school" : "Microsoft",
            "dates" : "February 2017 ",
            "url" : "https://drive.google.com/open?id=0B92AeDAoseReMTNncUlVQ2lWY2M"
        },
        {
            "title" : "English",
            "school" : "Duolingo",
            "dates" : "February 2017 ",
            "url" : ""
        },
        {
            "title" : "JCL/COBOL",
            "school" : "Unijorge",
            "dates" : "February 2017 ",
            "url" : ""
        },
        {
            "title" : "Curso de Introducción al Desarrollo Web: HTML y CSS (1/2)",
            "school" : "Actívate con Google",
            "dates" : "February 2017 ",
            "url" : "https://drive.google.com/open?id=0B92AeDAoseReRDkzVk82aVk2QzA"
        }
    ],
    "display" : function() {
                    for(school in education.schools){
                        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
                        var formattedDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree);
                        var formattedNameDegree = formattedName + formattedDegree;
                        var formattedDates =  HTMLschoolDates.replace("%data%",education.schools[school].dates);
                        var formattedLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location);
                        var formattedMajor =  HTMLschoolMajor.replace("%data%",education.schools[school].majors);
                        
                        $("#education").after(HTMLschoolStart);
                        $(".education-entry:last").append(formattedNameDegree);
                        $(".education-entry:last").append(formattedDates);
                        $(".education-entry:last").append(formattedLocation);
                        $(".education-entry:last").append(formattedMajor);
                    } 

                        $("#education").after(HTMLonlineClasses);
                    for(course in education.onlineCourses){
                        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
                        var formattedSchool =  HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
                        var formattedTitleSchool = formattedTitle + formattedSchool;
                        var formattedDates =  HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
                        var formattedURL =  HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);                       
                        
                        $("#education").after(formattedTitleSchool);
                        $("#education").after(formattedDates);
                        $("#education").after(formattedURL);
                    }
    }
};

education.display();


var work = {
    "jobs" : [
        {
            "employer" : "I am",
            "title" : "IT Solutions Architect",
            "dates" : "June 2016 - Present",
            "description" : "DevOps Consulting and development of native and hybrid solutions across platforms"
        },
        {
            "employer" : "Solutis",
            "title" : "Systems Analyst Developer",
            "dates" : "August 2016 - Present",
            "description" : "Solution Architect, Systems Analyst and Full Stack Programmer. "+
                            "BackEnd: Java 8 Skills Stream, Lambda, Java EE7, Jpa 2.1 / Hibernate, EJB, CDI, JAX-RS, JAX-WS, Wildfly, Jboss EAP 6.3, Maven, Design patterns."+
                            "FrontEnd: Angle 1.X, and 2.X, React, Gulp, Boostrap. "+
                            "Architecture: Microservices, Nanoservices, Reactive and Distributed Computing."
        },{
            "employer" : "Capgemini",
            "title" : "Junior Systems Analyst",
            "dates" : "June 2015 - June 2016",
            "description" : "Development of solutions, and migration using Java technology SE 5 to 7 and Java EE 5, 6 and use of EJB's. Also using the JSF 1.2 and 2.0 framework, Apache CXF and POI, JAXB, for security JAAS and Spring Security, as well as Apache Wicket, Spring, Reporting tool like JasperReport (IReport) and FrontEnd in AngularJS and bootstrap. SQL Server 2000, 2008, and DB2 data."
        },{
            "employer" : "Stefanini",
            "title" : "Systems Analyst",
            "dates" : "December 2012 - March 2015",
            "description" : "Evolutionary and adaptive maintenance in solutions with classic ASP and PHP 5 also documentation with Sphinx, Cake frameworks, Yii (basic) WebService development RestFull and developement in android, VB.Net desktop and PL / SQL procedures, triggers and JOB's in the Oracle database."
        },{
            "employer" : "Avansys",
            "title" : "Web and Database Developer",
            "dates" : "September 2011 - September 2012",
            "description" : "JAVA 5 and ASP Classic JBOSS server with RichFaces, Hibernate with JPA, and Oracle database"
        },{
            "employer" : "EcGlobal and Prefecture of Salvador",
            "title" : "Trainee",
            "dates" : "February 2011 - July 2011",
            "description" : "FrontEnd Developement of many projects and manutence"
        },{
            "employer" : "Login Informatica",
            "title" : "Trainee",
            "dates" : "July 2010 - February 2011",
            "description" : "Return of damaged materials, like as power supply, keyboard, mouse..."
        }
    ],
    "display" : function () {
                    $("#workExperience").after(HTMLworkStart);
                    for(job in work.jobs){
                        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
                        var formattedTitle =  HTMLworkTitle.replace("%data%",work.jobs[job].title);
                        var formattedEmployerTitle = formattedEmployer + formattedTitle;
                        var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
                        var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);

                        $(".work-entry:last").append(formattedEmployerTitle);                        
                        $(".work-entry:last").append(formattedDates);
                        $(".work-entry:last").append(formattedDescription);
                    }                    
                }
};

work.display();


var projects = {
    "projects" : [ 
        { 
            "description" : "Blog post exemple - study ",
            "title" : "Blog post exemple",
            "link" : "https://goo.gl/WDzP52e",
            "dates" : "02/2017",
            "images" : ["",""]
        },{ 
            "description" : "Bootstrap landing page - study",
            "title" : "Bootstrap landing page",
            "link" : "https://goo.gl/Kn1ULE",
            "dates" : "02/2017",
            "images" : ["",""]
        },{ 
            "description" : "Card of animal - project of NanoDegree",
            "title" : "Card of animal",
            "link" : "https://goo.gl/Bnc6eK",
            "dates" : "02/2017",
            "images" : ["",""]
        },{ 
            "description" : "Encarte Digital is project in my graduacion",
            "title" : "Encarte Digital",
            "link" : "https://goo.gl/7XvTjK",
            "dates" : "02/2017",
            "images" : ["",""]
        },{ 
            "description" : "Mockup to article - study",
            "title" : "Mockup to article",
            "link" : "https://goo.gl/zWdkqK",
            "dates" : "02/2017",
            "images" : ["",""]
        },{ 
            "description" : "Sistema de outorga de candidatos do concurso feito em nodeJs com websockets para os paines e em SOA com angularJs, bootstrap,bower, java 8 e as JSR 311, 317, 330, 339, 356, 365, JasperReports, maven",
            "title" : "Sistema de outorga",
            "link" : "",
            "dates" : "December 2016 to January 2017",
            "images" : ["",""]
        },{ 
            "description" : "Portal de serviços com consulta publica e diversas funcionalidades de acesso ao cidadão usando uma arquitetura reativa e microservice, com java EE 7, java 8, Angular.",
            "title" : "Portal de Serviços",
            "link" : "",
            "dates" : "August 2016 to Present",
            "images" : ["",""]
        },{ 
            "description" : "Projeto de migração a sistema de apolice de seguros feito em AngularJs, bootstrap e backend Java com arquitetura SOA",
            "title" : "GSRE - Avliq",
            "link" : "",
            "dates" : "April 2015 to November 2015",
            "images" : ["",""]
        },{ 
            "description" : "Sistema da ACBEU em seus diversos modulos em ASP 3.0 com algumas funcionalidades em PHP 5 em migração para Cake um erp e banco de dados Oracle",
            "title" : "Sistema Gerencial ACBEU",
            "link" : "",
            "dates" : "December 2012 to February 2015",
            "images" : ["",""]
        },{ 
            "description" : "Sistema de alfabetizando do Governo da Bahia feito em Java 5, com servidor de aplicação JBOSS, JSF, richfaces, Ant e banco oracle",
            "title" : "Gestão TOPA",
            "link" : "",
            "dates" : "January 2012 to September 2012",
            "images" : ["",""]
        },{ 
            "description" : "Fiz os serviços para processar as requisições do aplicativo e densenvolvi uma versão que não foi a que foi publicada Segue URL em Google Play : https://play.google.com/store/apps/details?id=com.virtualizesolucoes.acbeu&hl=pt_BR",
            "title" : "Aplicativo ACBEU - BackEnd",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Corrigi uns bugs da migração da versão do primefaces e do framework proprietário TJFW e desenvolvi um relatório",
            "title" : "SISCOMP - Sistema de Compras",
            "link" : "",
            "dates" : "November 2016 to February 2017",
            "images" : ["",""]
        },{ 
            "description" : "Durante o mês de meu aviso prévio que foi cumprido durante a minha estádia na fabrica de software da Stefanini ajudei na manutenção desse sistema",
            "title" : "Sistema interno de controle de viagens Coelba",
            "link" : "",
            "dates" : "March 2015 to Present",
            "images" : ["",""]
        },{ 
            "description" : "Fiz deversas manutenções evolutivas e corretivas no sistema",
            "title" : "Sistema da Biblioteca ACBEU",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Sistema em PHP 5.6 no qual auxliei no desenvolvimento de rotinas e estruturação OO bem como a documentação do mesmo",
            "title" : "ERP - Sistema de Controle Financeiro ACBEU",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Realizei manutenções e adapções no sistema de publicação e estruturação do banco de dados na ACBEU",
            "title" : "ACBEU ON-LINE",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Estrutura de banco do Sistema e processo de matricula na questão de logica de banco",
            "title" : "Estrutura de Banco Maple Bear",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Manutenção em um sistema VB.NET desktop",
            "title" : "Sistema de emissão de carteirinha alunos ACBEU",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Auxlio na migração da aplicação em vb6 para Java SOA e angular 1.2.X",
            "title" : "RSUS",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Extração de dados e desenvolvimento de querys com exportação em poucas vezes manutenção em ASP e aprendizado de banco de dados NATURAL e sistema em COBOL",
            "title" : "Emissão de Relatórios e Consulta de Extração de Dados na SEC",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{             
            "description" : "Sistema usando arquitetura AWB e biblioteca PDC para comunicação com COBOL com a utilização do FWOP, framework para ajudar o uso dos EJB e comunicando com o sistema web via soap. Também fazendo uso do GPAR que é um componente coorporativo para gestão de parametros, além disso sava JSP que é o  JSF1.2 e Spring Security no Framework",
            "title" : "GCCF - Gestão de Conteudo Corporativo",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Iniciei o desenvolvimento da aplicação que inovou a BU que fiquei inserido pois usou a nova versão do AWB que é um conjunto de tecnologias semelhante ao Spring Boot ou warm ",
            "title" : "PLB Cartões",
            "link" : "",
            "dates" : "",
            "images" : ["",""]
        },{ 
            "description" : "Meus projetos e sistemas feito por estudo, trabalho ou diversão com a motivação da nanograduação",
            "title" : "Portifolio",
            "link" : "emendes28.github.io",
            "dates" : "",
            "images" : ["",""]
        }                             
    ],
    "display" : function() {
                    for(project in projects.projects){
                        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);                       
                        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
                        var formattedDates =  HTMLprojectDates.replace("%data%",projects.projects[project].dates);
                        var formattedImage =  HTMLprojectImage.replace("%data%",projects.projects[project].images);
                        
                        $("#projects").after(HTMLprojectStart);
                        $(".project-entry:last").append(formattedTitle);
                        $(".project-entry:last").append(formattedDates);
                        $(".project-entry:last").append(formattedDescription);
                        //$(".project-entry:last").append(formattedImage);
                    } 
               }
};
projects.display();