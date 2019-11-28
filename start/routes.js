'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/register','AuthController.store')
Route.post('/authenticate','AuthController.authenticate')



Route.group(()=> {
Route.resource('noticias', 'NoticiaController').apiOnly().except("index").except("show");
}).middleware('auth');
Route.get('/noticias','NoticiaController.index')
Route.get('/noticias/:id','NoticiaController.show')
