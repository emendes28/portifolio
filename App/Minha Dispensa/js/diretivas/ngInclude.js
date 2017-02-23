



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-4ca81a569e4b382193f26989979660344b2a86c1039cf44e471d2cdfb70c9ce4.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-4129627c8cf63edb7480badb70e1a5a8eba9dd069ef776cb5f075a5f2d4047f8.css" media="all" rel="stylesheet" />
    
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-2d5d1699983d8dd7c384c67dfc183fbace8e3a24866e8822069d599f68e71fb2.css" media="all" rel="stylesheet" />

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-b0c85b6eac5426cd1652deca19bc585e688aacec370c4541ab7f13cb5af4dc00.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-124b3847a604fc0e15d55e822321b3cf526c993bdad6b191fecde06505751064.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>angular.js/ngInclude.js at master · angular/angular.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/angular.js" name="twitter:title" /><meta content="angular.js - HTML enhanced for web apps" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="angular/angular.js" property="og:title" /><meta content="https://github.com/angular/angular.js" property="og:url" /><meta content="angular.js - HTML enhanced for web apps" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="B369884E:53FF:9066CB4:57159699" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZmVhZDZlYzFkNzI4MWU5ZTU2YzM3ZTUwOWUzNmE3YjRiMTUyNDY2ODY2NmE5MzVhZmFlZDNlMDIyOGM0NWYzM3x7InJlbW90ZV9hZGRyZXNzIjoiMTc5LjEwNS4xMzYuNzgiLCJyZXF1ZXN0X2lkIjoiQjM2OTg4NEU6NTNGRjo5MDY2Q0I0OjU3MTU5Njk5IiwidGltZXN0YW1wIjoxNDYxMDMyNjAxfQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="0c01cf9422e3d77bda2c241dd9f83caaad392337" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="dc812ac6dabadd5440144e9805d8c8fd">
    

      
  <meta name="description" content="angular.js - HTML enhanced for web apps">
  <meta name="go-import" content="github.com/angular/angular.js git https://github.com/angular/angular.js.git">

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="460078" name="octolytics-dimension-repository_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="460078" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/angular.js/commits/master.atom" rel="alternate" title="Recent Commits to angular.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/angular/angular.js/blob/master/src/ng/directive/ngInclude.js" data-pjax-transient>
  </head>


  <body class="logged-out   env-production linux vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
    </a>

    <button class="btn-link right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1z m0-4H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1zM0.59 11h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1z"></path></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fangular%2Fangular.js%2Fblob%2Fmaster%2Fsrc%2Fng%2Fdirective%2FngInclude.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/angular/angular.js/search" class="js-site-search-form" data-scoped-search-url="/angular/angular.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fangular%2Fangular.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
    Watch
  </a>
  <a class="social-count" href="/angular/angular.js/watchers">
    4,251
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fangular.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/angular/angular.js/stargazers">
      48,615
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fangular.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
        Fork
      </a>

    <a href="/angular/angular.js/network" class="social-count">
      23,118
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/angular" class="url fn" rel="author">angular</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/angular/angular.js" data-pjax="#js-repo-pjax-container">angular.js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/angular.js" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular/angular.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/angular/angular.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /angular/angular.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">835</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/angular.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /angular/angular.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">292</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/angular/angular.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /angular/angular.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/angular/angular.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /angular/angular.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/angular/angular.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /angular/angular.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/angular/angular.js/blob/eb9f7d484d4e8b45996fb745993d33e0da5210a1/src/ng/directive/ngInclude.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c8ea8e487128db4c8f2fe0e63bbe4a71 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/g3_v1_0/src/ng/directive/ngInclude.js"
               data-name="g3_v1_0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="g3_v1_0">
                g3_v1_0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/g3_v1_2/src/ng/directive/ngInclude.js"
               data-name="g3_v1_2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="g3_v1_2">
                g3_v1_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/g3_v1_3/src/ng/directive/ngInclude.js"
               data-name="g3_v1_3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="g3_v1_3">
                g3_v1_3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/g3_v1_4/src/ng/directive/ngInclude.js"
               data-name="g3_v1_4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="g3_v1_4">
                g3_v1_4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/g3_v1_5/src/ng/directive/ngInclude.js"
               data-name="g3_v1_5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="g3_v1_5">
                g3_v1_5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/hubot-integration/src/ng/directive/ngInclude.js"
               data-name="hubot-integration"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="hubot-integration">
                hubot-integration
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/angular/angular.js/blob/master/src/ng/directive/ngInclude.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/materialize/src/ng/directive/ngInclude.js"
               data-name="materialize"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="materialize">
                materialize
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v0.9.x/src/ng/directive/ngInclude.js"
               data-name="v0.9.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v0.9.x">
                v0.9.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v1.0.x/src/ng/directive/ngInclude.js"
               data-name="v1.0.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v1.0.x">
                v1.0.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v1.2.x/src/ng/directive/ngInclude.js"
               data-name="v1.2.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v1.2.x">
                v1.2.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v1.3.x/src/ng/directive/ngInclude.js"
               data-name="v1.3.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v1.3.x">
                v1.3.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v1.4.x/src/ng/directive/ngInclude.js"
               data-name="v1.4.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v1.4.x">
                v1.4.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/angular.js/blob/v1.5.x/src/ng/directive/ngInclude.js"
               data-name="v1.5.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="v1.5.x">
                v1.5.x
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.5/src/ng/directive/ngInclude.js"
              data-name="v1.5.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.5">
                v1.5.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.4/src/ng/directive/ngInclude.js"
              data-name="v1.5.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.4">
                v1.5.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.3/src/ng/directive/ngInclude.js"
              data-name="v1.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.3">
                v1.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.2/src/ng/directive/ngInclude.js"
              data-name="v1.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.2">
                v1.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.1/src/ng/directive/ngInclude.js"
              data-name="v1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.1">
                v1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0/src/ng/directive/ngInclude.js"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-rc.2/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-rc.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-rc.2">
                v1.5.0-rc.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-rc.1/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-rc.1">
                v1.5.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-rc.0/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-rc.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-rc.0">
                v1.5.0-rc.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-beta.2/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.2">
                v1.5.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-beta.1/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.1">
                v1.5.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.5.0-beta.0/src/ng/directive/ngInclude.js"
              data-name="v1.5.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.0">
                v1.5.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.10/src/ng/directive/ngInclude.js"
              data-name="v1.4.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.10">
                v1.4.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.9/src/ng/directive/ngInclude.js"
              data-name="v1.4.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.9">
                v1.4.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.8/src/ng/directive/ngInclude.js"
              data-name="v1.4.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.8">
                v1.4.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.7/src/ng/directive/ngInclude.js"
              data-name="v1.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.7">
                v1.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.6/src/ng/directive/ngInclude.js"
              data-name="v1.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.6">
                v1.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.5/src/ng/directive/ngInclude.js"
              data-name="v1.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.5">
                v1.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.4/src/ng/directive/ngInclude.js"
              data-name="v1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.4">
                v1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.3/src/ng/directive/ngInclude.js"
              data-name="v1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.3">
                v1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.2/src/ng/directive/ngInclude.js"
              data-name="v1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2">
                v1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.1/src/ng/directive/ngInclude.js"
              data-name="v1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1">
                v1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0/src/ng/directive/ngInclude.js"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-rc.2/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-rc.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-rc.2">
                v1.4.0-rc.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-rc.1/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-rc.1">
                v1.4.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-rc.0/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-rc.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-rc.0">
                v1.4.0-rc.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.6/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.6">
                v1.4.0-beta.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.5/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.5">
                v1.4.0-beta.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.4/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.4">
                v1.4.0-beta.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.3/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.3">
                v1.4.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.2/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.2">
                v1.4.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.1/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.1">
                v1.4.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.4.0-beta.0/src/ng/directive/ngInclude.js"
              data-name="v1.4.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.0">
                v1.4.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.20/src/ng/directive/ngInclude.js"
              data-name="v1.3.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.20">
                v1.3.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.19/src/ng/directive/ngInclude.js"
              data-name="v1.3.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.19">
                v1.3.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.18/src/ng/directive/ngInclude.js"
              data-name="v1.3.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.18">
                v1.3.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.17/src/ng/directive/ngInclude.js"
              data-name="v1.3.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.17">
                v1.3.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.16/src/ng/directive/ngInclude.js"
              data-name="v1.3.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.16">
                v1.3.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.15/src/ng/directive/ngInclude.js"
              data-name="v1.3.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.15">
                v1.3.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.14/src/ng/directive/ngInclude.js"
              data-name="v1.3.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.14">
                v1.3.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.13/src/ng/directive/ngInclude.js"
              data-name="v1.3.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.13">
                v1.3.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.12/src/ng/directive/ngInclude.js"
              data-name="v1.3.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.12">
                v1.3.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.11/src/ng/directive/ngInclude.js"
              data-name="v1.3.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.11">
                v1.3.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.10/src/ng/directive/ngInclude.js"
              data-name="v1.3.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.10">
                v1.3.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.9/src/ng/directive/ngInclude.js"
              data-name="v1.3.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.9">
                v1.3.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.8/src/ng/directive/ngInclude.js"
              data-name="v1.3.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.8">
                v1.3.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.7/src/ng/directive/ngInclude.js"
              data-name="v1.3.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.7">
                v1.3.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.6/src/ng/directive/ngInclude.js"
              data-name="v1.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.6">
                v1.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.5/src/ng/directive/ngInclude.js"
              data-name="v1.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.5">
                v1.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.4/src/ng/directive/ngInclude.js"
              data-name="v1.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.4">
                v1.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.3/src/ng/directive/ngInclude.js"
              data-name="v1.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.3">
                v1.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.2/src/ng/directive/ngInclude.js"
              data-name="v1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2">
                v1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.1/src/ng/directive/ngInclude.js"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0/src/ng/directive/ngInclude.js"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.5/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.5">
                v1.3.0-rc.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.4/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.4">
                v1.3.0-rc.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.3/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.3">
                v1.3.0-rc.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.2/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.2">
                v1.3.0-rc.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.1/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.1">
                v1.3.0-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-rc.0/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-rc.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-rc.0">
                v1.3.0-rc.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.19/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.19">
                v1.3.0-beta.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.18/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.18">
                v1.3.0-beta.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.17/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.17">
                v1.3.0-beta.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.16/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.16">
                v1.3.0-beta.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.15/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.15">
                v1.3.0-beta.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.14/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.14">
                v1.3.0-beta.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.13/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.13">
                v1.3.0-beta.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.12/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.12">
                v1.3.0-beta.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.11/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.11">
                v1.3.0-beta.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.10/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.10">
                v1.3.0-beta.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.9/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.9">
                v1.3.0-beta.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.8/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.8">
                v1.3.0-beta.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.7/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.7">
                v1.3.0-beta.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.6/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.6">
                v1.3.0-beta.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.5/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.5">
                v1.3.0-beta.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.4/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.4">
                v1.3.0-beta.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.3/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.3">
                v1.3.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.2/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.2">
                v1.3.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.3.0-beta.1/src/ng/directive/ngInclude.js"
              data-name="v1.3.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.1">
                v1.3.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.29/src/ng/directive/ngInclude.js"
              data-name="v1.2.29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.29">
                v1.2.29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.28/src/ng/directive/ngInclude.js"
              data-name="v1.2.28"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.28">
                v1.2.28
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.27/src/ng/directive/ngInclude.js"
              data-name="v1.2.27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.27">
                v1.2.27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.26/src/ng/directive/ngInclude.js"
              data-name="v1.2.26"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.26">
                v1.2.26
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.25/src/ng/directive/ngInclude.js"
              data-name="v1.2.25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.25">
                v1.2.25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.24/src/ng/directive/ngInclude.js"
              data-name="v1.2.24"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.24">
                v1.2.24
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.23/src/ng/directive/ngInclude.js"
              data-name="v1.2.23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.23">
                v1.2.23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.22/src/ng/directive/ngInclude.js"
              data-name="v1.2.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.22">
                v1.2.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.21/src/ng/directive/ngInclude.js"
              data-name="v1.2.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.21">
                v1.2.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.20/src/ng/directive/ngInclude.js"
              data-name="v1.2.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.20">
                v1.2.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.19/src/ng/directive/ngInclude.js"
              data-name="v1.2.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.19">
                v1.2.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.18/src/ng/directive/ngInclude.js"
              data-name="v1.2.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.18">
                v1.2.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.17/src/ng/directive/ngInclude.js"
              data-name="v1.2.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.17">
                v1.2.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.16/src/ng/directive/ngInclude.js"
              data-name="v1.2.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.16">
                v1.2.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.15/src/ng/directive/ngInclude.js"
              data-name="v1.2.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.15">
                v1.2.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.14/src/ng/directive/ngInclude.js"
              data-name="v1.2.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.14">
                v1.2.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.13/src/ng/directive/ngInclude.js"
              data-name="v1.2.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.13">
                v1.2.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.12/src/ng/directive/ngInclude.js"
              data-name="v1.2.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.12">
                v1.2.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.11/src/ng/directive/ngInclude.js"
              data-name="v1.2.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.11">
                v1.2.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.10/src/ng/directive/ngInclude.js"
              data-name="v1.2.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.10">
                v1.2.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/angular.js/tree/v1.2.9/src/ng/directive/ngInclude.js"
              data-name="v1.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.9">
                v1.2.9
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/angular/angular.js/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/angular/angular.js"><span>angular.js</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/angular/angular.js/tree/master/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/angular/angular.js/tree/master/src/ng"><span>ng</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/angular/angular.js/tree/master/src/ng/directive"><span>directive</span></a></span><span class="separator">/</span><strong class="final-path">ngInclude.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/angular/angular.js/commit/ddad26402bd092c19c722bb1cef65018e56a8a35" data-pjax>
          ddad264
        </a>
        <time datetime="2016-04-06T18:35:49Z" is="relative-time">Apr 6, 2016</time>
      </span>
      <div>
        <img alt="@mgol" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1758366?v=3&amp;s=40" width="20" />
        <a href="/mgol" class="user-mention" rel="contributor">mgol</a>
          <a href="/angular/angular.js/commit/ddad26402bd092c19c722bb1cef65018e56a8a35" class="message" data-pjax="true" title="refactor(jshint): don&#39;t assume browser-only globals

Fixes #13442
Closes #14345">refactor(jshint): don't assume browser-only globals</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>27</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="matsko" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=matsko"><img alt="@matsko" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/93018?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="petebacondarwin" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=petebacondarwin"><img alt="@petebacondarwin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/15655?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="IgorMinar" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=IgorMinar"><img alt="@IgorMinar" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/216296?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=vojtajina"><img alt="@vojtajina" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/46647?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="juliemr" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=juliemr"><img alt="@juliemr" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2081709?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mhevery" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=mhevery"><img alt="@mhevery" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/111951?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tbosch" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=tbosch"><img alt="@tbosch" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/690815?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="btford" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=btford"><img alt="@btford" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/474988?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="caitp" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=caitp"><img alt="@caitp" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2294695?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Narretz" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=Narretz"><img alt="@Narretz" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1153097?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mgol" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=mgol"><img alt="@mgol" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1758366?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rus0000" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=rus0000"><img alt="@rus0000" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/5832730?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mark0978" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=mark0978"><img alt="@mark0978" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/106150?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="harrison" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=harrison"><img alt="@harrison" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/20165?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lgalfaso" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=lgalfaso"><img alt="@lgalfaso" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/391394?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rjamet" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=rjamet"><img alt="@rjamet" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/10632216?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jesselpalmer" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=jesselpalmer"><img alt="@jesselpalmer" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/682097?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="SekibOmazic" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=SekibOmazic"><img alt="@SekibOmazic" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3735902?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hzoo" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=hzoo"><img alt="@hzoo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/588473?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mlarcher" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=mlarcher"><img alt="@mlarcher" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1116431?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kutyel" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=kutyel"><img alt="@kutyel" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5127501?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dlongley" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=dlongley"><img alt="@dlongley" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/168137?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jdavisp3" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=jdavisp3"><img alt="@jdavisp3" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/43582?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chirayuk" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=chirayuk"><img alt="@chirayuk" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/37704?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="shyamseshadri" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=shyamseshadri"><img alt="@shyamseshadri" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/229613?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stephenbunch" href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js?author=stephenbunch"><img alt="@stephenbunch" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/204081?v=3&amp;s=40" width="20" /> </a>

    <button type="button" data-facebox="#blob_contributors_box" class="btn-link others-text">and others</button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@matsko" height="24" src="https://avatars2.githubusercontent.com/u/93018?v=3&amp;s=48" width="24" />
            <a href="/matsko">matsko</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@petebacondarwin" height="24" src="https://avatars3.githubusercontent.com/u/15655?v=3&amp;s=48" width="24" />
            <a href="/petebacondarwin">petebacondarwin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@IgorMinar" height="24" src="https://avatars1.githubusercontent.com/u/216296?v=3&amp;s=48" width="24" />
            <a href="/IgorMinar">IgorMinar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vojtajina" height="24" src="https://avatars1.githubusercontent.com/u/46647?v=3&amp;s=48" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@juliemr" height="24" src="https://avatars0.githubusercontent.com/u/2081709?v=3&amp;s=48" width="24" />
            <a href="/juliemr">juliemr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mhevery" height="24" src="https://avatars0.githubusercontent.com/u/111951?v=3&amp;s=48" width="24" />
            <a href="/mhevery">mhevery</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tbosch" height="24" src="https://avatars2.githubusercontent.com/u/690815?v=3&amp;s=48" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@btford" height="24" src="https://avatars3.githubusercontent.com/u/474988?v=3&amp;s=48" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@caitp" height="24" src="https://avatars0.githubusercontent.com/u/2294695?v=3&amp;s=48" width="24" />
            <a href="/caitp">caitp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Narretz" height="24" src="https://avatars3.githubusercontent.com/u/1153097?v=3&amp;s=48" width="24" />
            <a href="/Narretz">Narretz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mgol" height="24" src="https://avatars2.githubusercontent.com/u/1758366?v=3&amp;s=48" width="24" />
            <a href="/mgol">mgol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rus0000" height="24" src="https://avatars2.githubusercontent.com/u/5832730?v=3&amp;s=48" width="24" />
            <a href="/rus0000">rus0000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mark0978" height="24" src="https://avatars2.githubusercontent.com/u/106150?v=3&amp;s=48" width="24" />
            <a href="/mark0978">mark0978</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@harrison" height="24" src="https://avatars1.githubusercontent.com/u/20165?v=3&amp;s=48" width="24" />
            <a href="/harrison">harrison</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lgalfaso" height="24" src="https://avatars1.githubusercontent.com/u/391394?v=3&amp;s=48" width="24" />
            <a href="/lgalfaso">lgalfaso</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rjamet" height="24" src="https://avatars1.githubusercontent.com/u/10632216?v=3&amp;s=48" width="24" />
            <a href="/rjamet">rjamet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jesselpalmer" height="24" src="https://avatars1.githubusercontent.com/u/682097?v=3&amp;s=48" width="24" />
            <a href="/jesselpalmer">jesselpalmer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@SekibOmazic" height="24" src="https://avatars1.githubusercontent.com/u/3735902?v=3&amp;s=48" width="24" />
            <a href="/SekibOmazic">SekibOmazic</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hzoo" height="24" src="https://avatars1.githubusercontent.com/u/588473?v=3&amp;s=48" width="24" />
            <a href="/hzoo">hzoo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mlarcher" height="24" src="https://avatars3.githubusercontent.com/u/1116431?v=3&amp;s=48" width="24" />
            <a href="/mlarcher">mlarcher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kutyel" height="24" src="https://avatars0.githubusercontent.com/u/5127501?v=3&amp;s=48" width="24" />
            <a href="/kutyel">kutyel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dlongley" height="24" src="https://avatars2.githubusercontent.com/u/168137?v=3&amp;s=48" width="24" />
            <a href="/dlongley">dlongley</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jdavisp3" height="24" src="https://avatars1.githubusercontent.com/u/43582?v=3&amp;s=48" width="24" />
            <a href="/jdavisp3">jdavisp3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chirayuk" height="24" src="https://avatars2.githubusercontent.com/u/37704?v=3&amp;s=48" width="24" />
            <a href="/chirayuk">chirayuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@shyamseshadri" height="24" src="https://avatars1.githubusercontent.com/u/229613?v=3&amp;s=48" width="24" />
            <a href="/shyamseshadri">shyamseshadri</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stephenbunch" height="24" src="https://avatars2.githubusercontent.com/u/204081?v=3&amp;s=48" width="24" />
            <a href="/stephenbunch">stephenbunch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zgmnkv" height="24" src="https://avatars1.githubusercontent.com/u/3600576?v=3&amp;s=48" width="24" />
            <a href="/zgmnkv">zgmnkv</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/angular/angular.js/raw/master/src/ng/directive/ngInclude.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/angular/angular.js/blame/master/src/ng/directive/ngInclude.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/angular/angular.js/commits/master/src/ng/directive/ngInclude.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
        </button>
  </div>

  <div class="file-info">
      307 lines (280 sloc)
      <span class="file-info-divider"></span>
    10.8 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> ngInclude</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @restrict ECA</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Fetches, compiles and includes an external HTML fragment.</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * By default, the template URL is restricted to the same domain and protocol as the</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * application document. This is done by calling {@link $sce#getTrustedResourceUrl</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * $sce.getTrustedResourceUrl} on it. To load templates from other domains or protocols</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * you may either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist them} or</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * {@link $sce#trustAsResourceUrl wrap them} as trusted values. Refer to Angular&#39;s {@link</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ng.$sce Strict Contextual Escaping}.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * In addition, the browser&#39;s</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * [Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * policy may further restrict whether the template is successfully loaded.</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * For example, `ngInclude` won&#39;t work for cross-domain requests on all browsers and for `file://`</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * access on some browsers.</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @animations</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | Animation                        | Occurs                              |</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * |----------------------------------|-------------------------------------|</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | {@link ng.$animate#enter enter}  | when the expression changes, on the new include |</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | {@link ng.$animate#leave leave}  | when the expression changes, on the old include |</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The enter and leave animation occur concurrently.</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @scope</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @priority 400</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">ngInclude</span>|src angular expression evaluating to URL. If the source is a string constant,</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                 make sure you wrap it in **single** quotes, e.g. `src=&quot;&#39;myPartialTemplate.html&#39;&quot;`.</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string=} onload Expression to evaluate when a new partial is loaded.</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  &lt;div class=&quot;alert alert-warning&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  **Note:** When using onload on SVG elements in IE11, the browser will try to call</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  a function with the name on the window element, which will usually throw a</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  &quot;function is undefined&quot; error. To fix this, you can instead use `data-onload` or a</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  different form that {@link guide/directive#normalization matches} `onload`.</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string=} autoscroll Whether `ngInclude` should call {@link ng.$anchorScroll</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  $anchorScroll} to scroll the viewport after the content is loaded.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - If the attribute is not set, disable scrolling.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - If the attribute is set without value, enable scrolling.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - Otherwise enable scrolling only if the expression evaluates to truthy value.</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  &lt;example module=&quot;includeExample&quot; deps=&quot;angular-animate.js&quot; animations=&quot;true&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;div ng-controller=&quot;ExampleController&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;select ng-model=&quot;template&quot; ng-options=&quot;t.name for t in templates&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        &lt;option value=&quot;&quot;&gt;(blank)&lt;/option&gt;</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;/select&gt;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       url of the template: &lt;code&gt;{{template.url}}&lt;/code&gt;</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;hr/&gt;</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;div class=&quot;slide-animate-container&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;div class=&quot;slide-animate&quot; ng-include=&quot;template.url&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;script.js&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      angular.module(&#39;includeExample&#39;, [&#39;ngAnimate&#39;])</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        .controller(&#39;ExampleController&#39;, [&#39;$scope&#39;, function($scope) {</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          $scope.templates =</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            [ { name: &#39;template1.html&#39;, url: &#39;template1.html&#39;},</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              { name: &#39;template2.html&#39;, url: &#39;template2.html&#39;} ];</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          $scope.template = $scope.templates[0];</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        }]);</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;template1.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      Content of template1.html</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;template2.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      Content of template2.html</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;animations.css&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate-container {</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        position:relative;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        background:white;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        border:1px solid black;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        height:40px;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        overflow:hidden;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate {</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        padding:10px;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate.ng-enter, .slide-animate.ng-leave {</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        position:absolute;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        top:0;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        left:0;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        right:0;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        bottom:0;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        display:block;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        padding:10px;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate.ng-enter {</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        top:-50px;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate.ng-enter.ng-enter-active {</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        top:0;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate.ng-leave {</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        top:0;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      .slide-animate.ng-leave.ng-leave-active {</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        top:50px;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      }</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;file name=&quot;protractor.js&quot; type=&quot;protractor&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      var templateSelect = element(by.model(&#39;template&#39;));</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      var includeElem = element(by.css(&#39;[ng-include]&#39;));</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      it(&#39;should load template1.html&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(includeElem.getText()).toMatch(/Content of template1.html/);</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      });</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      it(&#39;should load template2.html&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        if (browser.params.browser == &#39;firefox&#39;) {</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          // Firefox can&#39;t handle using selects</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          // See https://github.com/angular/protractor/issues/480</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          return;</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        }</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        templateSelect.click();</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        templateSelect.all(by.css(&#39;option&#39;)).get(2).click();</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(includeElem.getText()).toMatch(/Content of template2.html/);</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      });</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      it(&#39;should change to blank&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        if (browser.params.browser == &#39;firefox&#39;) {</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          // Firefox can&#39;t handle using selects</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          return;</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        }</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        templateSelect.click();</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        templateSelect.all(by.css(&#39;option&#39;)).get(0).click();</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(includeElem.isPresent()).toBe(false);</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      });</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  &lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> ngInclude#$includeContentRequested</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @eventType emit on the scope ngInclude was declared in</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Emitted every time the ngInclude content is requested.</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object.</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">src</span> URL of content to load.</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> ngInclude#$includeContentLoaded</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @eventType emit on the current ngInclude scope</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Emitted every time the ngInclude content is reloaded.</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object.</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">src</span> URL of content to load.</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> ngInclude#$includeContentError</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @eventType emit on the scope ngInclude was declared in</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Emitted when a template HTTP request yields an erroneous response (status &lt; 200 || status &gt; 299)</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object.</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">src</span> URL of content to load.</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ngIncludeDirective <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$templateRequest<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$anchorScroll<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$animate<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">function</span>(<span class="pl-smi">$templateRequest</span>,   <span class="pl-smi">$anchorScroll</span>,   <span class="pl-smi">$animate</span>) {</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ECA<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    priority<span class="pl-k">:</span> <span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">    terminal<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    transclude<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>element<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    controller<span class="pl-k">:</span> <span class="pl-smi">angular</span>.<span class="pl-smi">noop</span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">compile</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">attr</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> srcExp <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-smi">ngInclude</span> <span class="pl-k">||</span> <span class="pl-smi">attr</span>.<span class="pl-smi">src</span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">          onloadExp <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-smi">onload</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">          autoScrollExp <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-smi">autoscroll</span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">$element</span>, <span class="pl-smi">$attr</span>, <span class="pl-smi">ctrl</span>, <span class="pl-smi">$transclude</span>) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> changeCounter <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">            currentScope,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">            previousElement,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">            currentElement;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-en">cleanupLastIncludeContent</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (previousElement) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">previousElement</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">            previousElement <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (currentScope) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">currentScope</span>.<span class="pl-en">$destroy</span>();</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">            currentScope <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (currentElement) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$animate</span>.<span class="pl-en">leave</span>(currentElement).<span class="pl-en">then</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">              previousElement <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">            previousElement <span class="pl-k">=</span> currentElement;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">            currentElement <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">scope</span>.<span class="pl-en">$watch</span>(srcExp, <span class="pl-k">function</span> <span class="pl-en">ngIncludeWatchAction</span>(<span class="pl-smi">src</span>) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-en">afterAnimation</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-en">isDefined</span>(autoScrollExp) <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>autoScrollExp <span class="pl-k">||</span> <span class="pl-smi">scope</span>.<span class="pl-en">$eval</span>(autoScrollExp))) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$anchorScroll</span>();</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> thisChangeId <span class="pl-k">=</span> <span class="pl-k">++</span>changeCounter;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (src) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//set the 2nd param to true to ignore the template request error so that the inner</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//contents and scope can be cleaned up.</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$templateRequest</span>(src, <span class="pl-c1">true</span>).<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">scope</span>.<span class="pl-smi">$$destroyed</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (thisChangeId <span class="pl-k">!==</span> changeCounter) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> newScope <span class="pl-k">=</span> <span class="pl-smi">scope</span>.<span class="pl-en">$new</span>();</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">ctrl</span>.<span class="pl-smi">template</span> <span class="pl-k">=</span> response;</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Note: This will also link all children of ng-include that were contained in the original</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// html. If that content contains controllers, ... they could pollute/change the scope.</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// However, using ng-include on an element with additional content does not make sense...</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Note: We can&#39;t remove them in the cloneAttchFn of $transclude as that</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// function is called before linking the content, which would apply child</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// directives to non existing elements.</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> clone <span class="pl-k">=</span> <span class="pl-en">$transclude</span>(newScope, <span class="pl-k">function</span>(<span class="pl-smi">clone</span>) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">cleanupLastIncludeContent</span>();</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$animate</span>.<span class="pl-en">enter</span>(clone, <span class="pl-c1">null</span>, $element).<span class="pl-en">then</span>(afterAnimation);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">              currentScope <span class="pl-k">=</span> newScope;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">              currentElement <span class="pl-k">=</span> clone;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">currentScope</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$includeContentLoaded<span class="pl-pds">&#39;</span></span>, src);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">scope</span>.<span class="pl-en">$eval</span>(onloadExp);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">            }, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">scope</span>.<span class="pl-smi">$$destroyed</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (thisChangeId <span class="pl-k">===</span> changeCounter) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">cleanupLastIncludeContent</span>();</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">scope</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$includeContentError<span class="pl-pds">&#39;</span></span>, src);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">scope</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$includeContentRequested<span class="pl-pds">&#39;</span></span>, src);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">cleanupLastIncludeContent</span>();</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">ctrl</span>.<span class="pl-smi">template</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">}];</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// This directive is called during the $transclude call of the first `ngInclude` directive.</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// It will replace and compile the content of the element with the loaded template.</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// We need this directive so that the element content is already filled when</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// the link function of another directive on the same element as ngInclude</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// is called.</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ngIncludeFillContentDirective <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$compile<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span>(<span class="pl-smi">$compile</span>) {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">      restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ECA<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">      priority<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">      require<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ngInclude<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">$element</span>, <span class="pl-smi">$attr</span>, <span class="pl-smi">ctrl</span>) {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">toString</span>.<span class="pl-c1">call</span>($element[<span class="pl-c1">0</span>]).<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>SVG<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// WebKit: https://bugs.webkit.org/show_bug.cgi?id=135698 --- SVG elements do not</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// support innerHTML, so detect this here and try to generate the contents</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// specially.</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$element</span>.<span class="pl-en">empty</span>();</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$compile</span>(<span class="pl-en">jqLiteBuildFragment</span>(<span class="pl-smi">ctrl</span>.<span class="pl-smi">template</span>, <span class="pl-c1">window</span>.<span class="pl-smi">document</span>).<span class="pl-c1">childNodes</span>)(scope,</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">function</span> <span class="pl-en">namespaceAdaptedClone</span>(<span class="pl-smi">clone</span>) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$element</span>.<span class="pl-en">append</span>(clone);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">          }, {futureParentElement<span class="pl-k">:</span> $element});</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$element</span>.<span class="pl-en">html</span>(<span class="pl-smi">ctrl</span>.<span class="pl-smi">template</span>);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$compile</span>(<span class="pl-smi">$element</span>.<span class="pl-en">contents</span>())(scope);</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">  }];</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.07192s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-b0c85b6eac5426cd1652deca19bc585e688aacec370c4541ab7f13cb5af4dc00.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-124b3847a604fc0e15d55e822321b3cf526c993bdad6b191fecde06505751064.js"></script>
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

