<?php
namespace App\Modules\Dashboard\Providers;

use App;
use Config;
use Lang;
use View;
use Illuminate\Support\ServiceProvider;

class DashboardServiceProvider extends ServiceProvider
{
	/**
	 * Register the Dashboard module service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		// This service provider is a convenient place to register your modules
		// services in the IoC container. If you wish, you may make additional
		// methods or service providers to keep the code more focused and granular.
		App::register('App\Modules\Dashboard\Providers\RouteServiceProvider');

		$this->registerNamespaces();
	}

	/**
	 * Register the Dashboard module resource namespaces.
	 *
	 * @return void
	 */
	protected function registerNamespaces()
	{
		Lang::addNamespace('dashboard', realpath(__DIR__.'/../Resources/Lang'));
		
		View::addNamespace('dashboard', base_path('resources/views/vendor/dashboard'));
		View::addNamespace('dashboard', realpath(__DIR__.'/../Resources/Views'));
	}
}
