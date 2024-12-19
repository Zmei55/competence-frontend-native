import 'i18next';
import buttons from '../locales/en/en_buttons.json';
import header from '../locales/en/en_header.json';
import auth from '../locales/en/en_auth.json';
import profile from '../locales/en/en_profile.json';
import guides from '../locales/en/en_guides.json';
import competence from '../locales/en/en_competence.json';
import guarantee from '../locales/en/en_guarantee.json';
import footer from '../locales/en/en_footer.json';
import shared from '../locales/en/en_shared.json';
import admin from '../locales/en/en_admin.json';
import feedback from '../locales/en/en_feedback.json';
import aboutProject from '../locales/en/en_aboutproject.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      buttons: typeof buttons;
      header: typeof header;
      auth: typeof auth;
      profile: typeof profile;
      guides: typeof guides;
      competence: typeof competence;
      guarantee: typeof guarantee;
      footer: typeof footer;
      shared: typeof shared;
      admin: typeof admin;
      feedback: typeof feedback;
      aboutProject: typeof aboutProject;
    };
  }
}
