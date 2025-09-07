import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_global_advantages';
  info: {
    displayName: 'advantage';
  };
  attributes: {
    advantage: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
  };
}

export interface GlobalBenefit extends Struct.ComponentSchema {
  collectionName: 'components_global_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface GlobalItemLogo extends Struct.ComponentSchema {
  collectionName: 'components_global_item_logos';
  info: {
    displayName: 'item-logo';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalItemText extends Struct.ComponentSchema {
  collectionName: 'components_global_item_texts';
  info: {
    displayName: 'item-text';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface MetaDataOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_open_graphs';
  info: {
    displayName: 'openGraph';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface MetaDataRobot extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_robots';
  info: {
    displayName: 'robot';
  };
  attributes: {
    follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface MetaDataTwitter extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_twitters';
  info: {
    displayName: 'twitter';
  };
  attributes: {
    creator: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.advantage': GlobalAdvantage;
      'global.benefit': GlobalBenefit;
      'global.item-logo': GlobalItemLogo;
      'global.item-text': GlobalItemText;
      'meta-data.open-graph': MetaDataOpenGraph;
      'meta-data.robot': MetaDataRobot;
      'meta-data.twitter': MetaDataTwitter;
    }
  }
}
