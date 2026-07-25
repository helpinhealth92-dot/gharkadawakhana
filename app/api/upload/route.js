export async function POST(req) {

  try {

    const formData = await req.formData();

    const file = formData.get("image");

    if (!file) {
      return Response.json(
        { message: "Image required" },
        { status: 400 }
      );
    }

    const imageUrl = "/uploads/" + file.name;

    return Response.json({
      message: "Image uploaded",
      url: imageUrl
    });

  } catch(error) {

    return Response.json(
      { message: "Upload failed" },
      { status: 500 }
    );

  }
}
