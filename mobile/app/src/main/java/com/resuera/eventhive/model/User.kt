package com.resuera.eventhive.model

data class User(
    val userID: Long?,
    val userEmail: String,
    val userPassword: String?,
    val userFirstName: String?,
    val userLastName: String?
)

