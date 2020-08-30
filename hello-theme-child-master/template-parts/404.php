<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<main class="site-main" role="main">
	<?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
		<header class="page-header">
			<h1 class="entry-title"><?php esc_html_e( 'The page can&rsquo;t be found.', 'hello-elementor' ); ?></h1>
		</header>
	<?php endif; ?>
	<div class="page-content">
		<p><?php esc_html_e( 'Awwww man, nothing here, sorry...', 'hello-elementor' ); ?></p>
		<a href="/" class="btn-text" style="margin-top: 40px;"><i class="fas fa-chevron-left"></i> Back Home</a>
	</div>
</main>
