import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

export interface DocumentItem {
  title: string;
  subtitle: string;
  points: string[];
  link?: string;
}

export function DocItemPoint({ point }: { point: string }) {
  return <li>{point}</li>;
}

export function DocItemOnCard({
  item,
  elevation,
}: {
  item: DocumentItem;
  elevation: number;
}) {
  const linkExists: boolean = item.link != null;
  return (
    <Card sx={{ height: "100%", p: 2, borderRadius: 8 }} elevation={elevation}>
      <CardContent>
        {DocItemPlain({ item })}
        {/* {linkExists ? (
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="small"
              variant="outlined"
              href={item.link}
              sx={{ alignItems: "end" }}
            >
              show
            </Button>
          </CardActions>
        ) : (
          <div />
        )} */}
      </CardContent>
    </Card>
  );
}

export function DocItemPlain({ item }: { item: DocumentItem }) {
  const isSinglePoint = item.points && item.points.length === 1;
  const linkExists = item.link != null;
  return (
    <div>
      {linkExists ?
     (<Link href={item.link}>
      <Typography variant="h6" gutterBottom>
        {item.title}
      </Typography>
      </Link> ): 
     (<Typography variant="h6" gutterBottom>
      {item.title}
    </Typography>)} 


      <Typography variant="subtitle2" gutterBottom>
        {item.subtitle}
      </Typography>

      {isSinglePoint ? (
        <Typography variant="body1">{item.points[0]}</Typography>
      ) : (
        <ul>
          {item.points.map((p, i) => (
            <DocItemPoint key={i} point={p} />
          ))}
        </ul>
      )}
    </div>
  );
}
