<?php
namespace App\Modules\Dashboard\Database\Seeds;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DashboardDatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		// $this->call('App\ModulesDashboard\Database\Seeds\FoobarTableSeeder');
	}

}
