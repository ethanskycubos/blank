## Laravel PHP Framework

    "require": {
        "php": ">=5.5.9",
        "laravel/framework": "5.1.*",
        "laravelcollective/html": "^5.1",
        "caffeinated/modules": "^2.1",
        "intervention/image": "^2.3",
        "roumen/feed": "^2.9",
        "maatwebsite/excel": "^2.1"
    },


## Packages

#### Html/Form Builder (laravelcollective/html)

	composer require laravelcollective/html
	
	config/app.php
	
	Collective\Html\HtmlServiceProvider::class,
	
	fascades
	
	'Form'       => Collective\Html\FormFacade::class,
	'Html'       => Collective\Html\HtmlFacade::class,
	

#### Modules (caffeinated/modules)

	composer require caffeinated/modules
	
	config/app.php
	
	Caffeinated\Modules\ModulesServiceProvider::class,
	
	fascade
	
	'Module'     => Caffeinated\Modules\Facades\Module::class,
	

#### Image Manipulation (intervention/image)

	composer require intervention/image
	
	config/app.php
	
	Intervention\Image\ImageServiceProvider::class,
	
	fascade
	
	'Image'      => Intervention\Image\Facades\Image::class,
	

#### Feeds (roumen/feed)

	composer require roumen/feed
	
	config/app.php
	
	Roumen\Feed\FeedServiceProvider::class,
	
	fascade
	
	'Feed'       => Roumen\Feed\Facades\Feed::class,
	

#### Excel (maatwebsite/excel)

	composer require maatwebsite/excel
	
	config/app.php
	
	Maatwebsite\Excel\ExcelServiceProvider::class,
	
	fascade
	
	'Excel'      => Maatwebsite\Excel\Facades\Excel::class,
	


## Support

If you have any questions, please feel free to visit our site [Philippines Outsourcing](http://philippineglobaloutsourcing.com/).

Or email me [sky@philippineglobaloutsourcing.com](mailto:sky@philippineglobaloutsourcing.com)

