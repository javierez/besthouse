

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
    };
    phoneNumbers: {
      main: string;
      sales: string;
    };
    emailAddresses: {
      info: string;
      sales: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "OlnINS_CmHQ_Co3xHJmpg",
  "name": "Inmobiliaria BestHouse León",
  "address": {
  "street": "Calle Santa Nonia 15, Bajo",
  "city": "León",
  "state": "León",
  "country": "España"
},
  "phoneNumbers": {
  "main": "639889889",
  "sales": "675384838"
},
  "emailAddresses": {
  "info": "adrian@besthouse.com",
  "sales": "rafael@besthouse.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 17:00",
  "saturday": "Sábados: 9:00 - 13:00",
  "sunday": "Domingos: Cerrado"
},
  "mapUrl": "https://share.google/tlJxT0YXzPD1SoLM8",
  "isDefault": true
}]
};
}

