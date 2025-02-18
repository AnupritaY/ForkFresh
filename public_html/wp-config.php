<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u137249212_gha3P' );

/** Database username */
define( 'DB_USER', 'u137249212_O9pyy' );

/** Database password */
define( 'DB_PASSWORD', 'LatVqPBEti' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'DQ*&j]w@!b,qlFT(o<JB]q5 8g3~jZepgDs<>B+0F#wSkQvH%D}`qyhk^VXhHs:V' );
define( 'SECURE_AUTH_KEY',   '?A9_eLvtOl9UO4:x#Zd15VmonHy_}FPHo(]%,TEaM|WP~loq~`(&9#t^8.Se#2P&' );
define( 'LOGGED_IN_KEY',     '`Q9}m{x=9g7YFX9-{EB_c%rs+YPy[kS/b*|~cG G&!C|B-:c1f{C=!XcJon6V#?!' );
define( 'NONCE_KEY',         '[wb!?LdR@524bL1ol+xDdBs7mk#U%Zihy%8HS668A,)m0-3*)8/$aCfpi6cR|-;E' );
define( 'AUTH_SALT',         'cGNzk!^AX]?qzq} ;R3GTJP@A^{=%e4J,dRAqO8c`*~zh{LN8EB~zNa]bxgb_q*3' );
define( 'SECURE_AUTH_SALT',  '>;a/0]F$3nBgcj<=qpv.QCpGJZMCDZ&.ZnHZ_iojlf=^*>NyQ_3-q9a^9(N;y/pS' );
define( 'LOGGED_IN_SALT',    'B[*S17LMlQ}<]42Ab:--;ZGZa%]<{g.cx3B-uksxX_|2UEd%XhjYhQ>bLM%;z+yc' );
define( 'NONCE_SALT',        '4l/Uk6JacknRAGn|}rg2/t<.h;|7Avu erz<2g %gNv>qE8bL?.r[Tb`]oct$f3x' );
define( 'WP_CACHE_KEY_SALT', '7HBKeHt:Nj&Ke~V%fkFVCa@egALZ/ZJ4io</waNxuT%@-0G3`@-H<LiI2M_`},?e' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', 'a5d6887bafb4cff377fd461b5ce876de' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
