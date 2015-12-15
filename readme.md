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

#### Image Manipulation (intervention/image)

#### Feeds (roumen/feed)

#### Excel (maatwebsite/excel)


Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
