interface LabelImage {
  url: string;
  alt: string;
  description: string;
}

export interface Label {
  description: string;
  images: LabelImage[];
}

export const LABELS: Label[] = [
  {
    description: "Máscara",
    images: [
      {
        url: "/required-mask.png",
        alt: "Obrigatória",
        description: "Obrigatório",
      },
      {
        url: "/recommended-mask.png",
        alt: "Recomendada",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: "/required-towel.png",
        alt: "Obrigatória",
        description: "Obrigatório",
      },
      {
        url: "/recommended-towel.png",
        alt: "Recomendada",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: "/partial-fountain.png",
        alt: "Parcial",
        description: "Parcial",
      },
      {
        url: "/not_allowed-fountain.png",
        alt: "Proibido",
        description: "Proibido",
      },
    ],
  },
  {
    description: "Vestiários",
    images: [
      {
        url: "/allowed-lockerroom.png",
        alt: "Liberado",
        description: "Liberado",
      },
      {
        url: "/partial-lockerroom.png",
        alt: "Parcial",
        description: "Parcial",
      },
      {
        url: "/closed-lockerroom.png",
        alt: "Fechado",
        description: "Fechado",
      },
    ],
  },
];
