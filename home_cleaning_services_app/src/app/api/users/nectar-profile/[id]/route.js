import { connectToDB } from "@/db/dbConfig";
import NectarModel from "@/models/nectarModel";
import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
//set up S3 credentials
const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});
//connect to db
connectToDB();

//route to get image from S3 bucket for profile
export async function GET(request, { params }) {
  try {
    let data = await params;
    const id = data.id;
    const nectar = await NectarModel.findById({ _id: id });
    if (nectar) {
      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${nectar.profileImage}`,
      };
      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      return NextResponse.json(
        { message: "User found image successfully", url },
        { status: 200 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
