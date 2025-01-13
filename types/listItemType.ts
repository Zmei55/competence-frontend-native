type CommonListProps = {
  id: number | string;
};

type NameProps = CommonListProps & {
  name: string;
  description?: never;
};
type DescriptionProps = CommonListProps & {
  description: string;
  name?: never;
};

export type ListItemType = NameProps | DescriptionProps;
