declare interface ITestStrings {
  //Web Parts property labels
  //You don't need to copy this fields
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  DateFieldLabel: string;
  DateTimeFieldLabel: string;
  PeopleFieldLabel: string;
  SPListFieldLabel: string;
  ColorFieldLabel: string;
  SPFolderFieldLabel: string;
  PasswordFieldLabel: string;
  FontFieldLabel: string;
  FontSizeFieldLabel: string;
  PhoneNumberFieldLabel: string;
  MaskedInputFieldLabel: string;
  GeoLocationFieldLabel: string;
  PictureFieldLabel: string;
  IconFieldLabel: string;
  DocumentFieldLabel: string;
  DisplayModeFieldLabel: string;
  CustomListFieldLabel: string;
  QueryFieldLabel: string;
  AlignFieldLabel: string;
  DropDownSelectFieldLabel: string;
  RichTextBoxFieldLabel: string;
  SliderRangeFieldLabel: string;
}

declare module 'testStrings' {
  const strings: ITestStrings;
  export = strings;
}
