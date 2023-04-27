import { QRCode as QrCode, QRCodeProps } from "react-qr-svg";
import { FunctionComponent } from "react";
import { Box } from "theme-ui";
import { json } from "stream/consumers";

const QRCode: FunctionComponent<QRCodeProps & React.SVGProps<SVGElement>> = (
  props
) => {
  return (
    <Box sx={{ width: [320] }}>
      <QrCode level="Q" style={{ width: "100%" }} {...props} />
    </Box>
  );
};

const data = {
  "body": {
      "credentials": [
          {
              "description": "https://polygon-id-game-score-as-credential.vercel.app/game-ld-context.json#KYCAgeCredential",
              "id": "a41d6d17-e53b-11ed-b7df-0242c0a88005"
          }
      ],
      "url": "https://self-hosted-platform.polygonid.me/v1/agent"
  },
  "from": "did:polygonid:polygon:mumbai:2qKpVXtkT7wdZSYiziD9Xuk4eRXHHTzhQ3W4bwEuDW",
  "id": "1dabb388-0be3-49e6-a7e7-f72e8065cca0",
  "thid": "1dabb388-0be3-49e6-a7e7-f72e8065cca0",
  "to": "did:polygonid:polygon:mumbai:2qFbtDak1cxVgtv9RBvdsTUYVeNGRYwnEyjh1Gfj6c",
  "typ": "application/iden3comm-plain-json",
  "type": "https://iden3-communication.io/credentials/1.0/offer"
}

export default function Home() {
  return (
  <>
  <QRCode value={JSON.stringify(data)} />
  </>
  )
}
