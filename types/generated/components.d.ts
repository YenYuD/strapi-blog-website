import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoComponentsMeta extends Schema.Component {
  collectionName: 'components_seo_components_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface SidebarSub extends Schema.Component {
  collectionName: 'components_sidebar_subs';
  info: {
    displayName: 'second-sub';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    articles: Attribute.Relation<
      'sidebar.sub',
      'oneToMany',
      'api::article.article'
    >;
    path: Attribute.String;
  };
}

export interface SidebarSubItem extends Schema.Component {
  collectionName: 'components_sidebar_sub_items';
  info: {
    displayName: 'sub-item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    articles: Attribute.Relation<
      'sidebar.sub-item',
      'oneToMany',
      'api::article.article'
    >;
    sub: Attribute.Component<'sidebar.sub', true>;
    path: Attribute.String;
    category: Attribute.Relation<
      'sidebar.sub-item',
      'oneToOne',
      'api::category.category'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo-components.meta': SeoComponentsMeta;
      'sidebar.sub': SidebarSub;
      'sidebar.sub-item': SidebarSubItem;
    }
  }
}
