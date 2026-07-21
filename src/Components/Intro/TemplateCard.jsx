import { Box, Image, Button } from "@chakra-ui/react";

export default function TemplateCard({ template, onSelect }) {
    return (
        <Box
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            cursor="pointer"
            transition="0.3s"
            _hover={{ transform: "scale(1.03)" }}
        >
            <Image src={template.imageSrc} />

            {/* Gradient overlay */}
            <Box
                position="absolute"
                bottom="0"
                w="100%"
                p={4}
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
            >
                <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => onSelect(template.id)}
                >
                    Use Template
                </Button>
            </Box>
        </Box>
    );
}