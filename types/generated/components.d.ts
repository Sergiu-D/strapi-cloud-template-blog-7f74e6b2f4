import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'A reusable button component with text and link';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: 'A hero section component with title, subtitle, and background image';
    displayName: 'Hero Section';
    icon: 'picture';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
