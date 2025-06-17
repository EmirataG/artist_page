import { ImageResponse } from "next/og";

// Step 1: Export the icon's metadata.
// Next.js will use this to generate the <link> tag with the correct sizes and type.
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Step 2: Default export a function that returns an ImageResponse.
// This function will be run by Next.js to generate the icon file.
export default function Icon() {
  return new ImageResponse(
    (
      // The JSX for our icon. We'll use nested divs with rounded corners
      // to create the vinyl record shape. ImageResponse uses a subset of
      // HTML and CSS, similar to styling emails.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f0f0", // A light background to see the icon clearly
        }}
      >
        {/* The black vinyl disc */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#1a1a1a",
          }}
        >
          {/* The red label */}
          <div
            style={{
              width: "45%",
              height: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "#ef4444",
            }}
          >
            {/* The white center hole */}
            <div
              style={{
                width: "15%",
                height: "15%",
                borderRadius: "50%",
                background: "white",
              }}
            />
          </div>
        </div>
      </div>
    ),
    // ImageResponse options. We can reuse the exported size object.
    {
      ...size,
    }
  );
}
