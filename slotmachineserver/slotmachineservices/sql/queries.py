# This file will contain a dictionary which holds our needed queries 
# to make accessing them within the remainder of our code more modular/concise.

queries = {
    'Create_Play_Table':
    '''
    CREATE TABLE IF NOT EXISTS play_results(userid SERIAL, playid SERIAL, result char(3), payout integer )
    '''
    ,
    'Create_DB':'CREATE DATABASE db'
    ,
    'Create_User_Table':
    '''
    CREATE TABLE IF NOT EXISTS users(userid SERIAL, username varchar(15), password varchar(12), credits integer )
    '''
    ,
    'Select_All_Plays':'SELECT * FROM play_results'
    ,
    'Select_All_Users': 'SELECT * FROM users'
}