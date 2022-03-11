<template>
    <nav class="navbar p-3 navbar-expand-lg navbar-dark" style="background-color: #EB2127;">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/" >PARCEL KOI??</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link" to="/create-parcel">Create Parcel</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/desh-board">Deshboard</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: black;
   cursor: pointer;
   color: white;
   border-radius: 3px;
 }
</style>