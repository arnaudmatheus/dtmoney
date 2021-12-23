import { ContentBox, ContentHeader, Text } from "./styles";

interface ContentCardProps {
  title: string;
  value: number;
  img: string;
  color?: boolean;
}

export function ContentCard({ title, value, img, color }: ContentCardProps) {
  return (
    <>
      {color ? (
        <ContentBox>
          <ContentHeader>
            <p>{title}</p>
            <img src={img} alt="entradas" />
          </ContentHeader>
          <Text>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value)}
          </Text>
        </ContentBox>
      ) : (
        <ContentBox className="total">
          <ContentHeader>
            <p>{title}</p>
            <img src={img} alt="entradas" />
          </ContentHeader>
          <Text>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value)}
          </Text>
        </ContentBox>
      )}
    </>
  );
}
