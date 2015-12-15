<?php
namespace App\Modules\God\Providers;

use App;
use Config;
use Lang;
use View;
use Illuminate\Support\ServiceProvider;

class GodServiceProvider extends ServiceProvider
{
	/**
	 * Register the God module service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		// This service provider is a convenient place to register your modules
		// services in the IoC container. If you wish, you may make additional
		// methods or service providers to keep the code more focused and granular.
		App::register('App\Modules\God\Providers\RouteServiceProvider');

		$this->registerNamespaces();
	}

	/**
	 * Register the God module resource namespaces.
	 *
	 * @return void
	 */
	protected function registerNamespaces()
	{
		Lang::addNamespace('god', realpath(__DIR__.'/../Resources/Lang'));
		
		View::addNamespace('god', base_path('resources/views/vendor/god'));
		View::addNamespace('god', realpath(__DIR__.'/../Resources/Views'));
	}
}
