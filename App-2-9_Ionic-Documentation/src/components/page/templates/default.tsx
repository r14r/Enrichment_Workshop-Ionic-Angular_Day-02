import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';

export default (props) => {
  const { page } = props;

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={page.headings} basepath={page.path}/>
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
      <docs-page-footer page={page}/>
    </article>
  );
};
