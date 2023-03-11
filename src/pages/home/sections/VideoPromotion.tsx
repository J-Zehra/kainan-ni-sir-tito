import { AspectRatio, Box, Center, Text } from "@chakra-ui/react";
import breakPoints from "../../../utils/interfaces/Breakpoints";

function VideoPromotion() {
  return (
    <Center
      id="promote"
      w={breakPoints}
      margin="auto"
      paddingBlock="1rem"
      placeContent="center"
      flexDir="column"
    >
      <Text color="palette.secondary" paddingBlock="5rem">
        Satisfy your Cravings
      </Text>
      <AspectRatio
        ratio={4 / 2}
        h={{ base: "100%", xl: "100%" }}
        w={{ base: "100%", xl: "100%" }}
      >
        <Box style={{ borderRadius: "1rem" }}>
          <iframe
            title="promotional-video"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100088958044987%2Fvideos%2F578441407651155%2F&show_text=false&width=560&t=0"
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </Box>
      </AspectRatio>
    </Center>
  );
}

export default VideoPromotion;
