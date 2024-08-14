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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo-components.meta': SeoComponentsMeta;
    }
  }
}
