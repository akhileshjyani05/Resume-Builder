import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const steps = [
    "Select a template from our collection.",
    "Build your resume using our builder.",
    "Download your resume.",
];

export default function StepsList() {
    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16}>
            {steps.map((step, index) => (
                <Box
                    key={index}
                    p={6}
                    borderRadius="xl"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    boxShadow="lg"
                    textAlign="center"
                    transition="0.3s"
                    _hover={{ transform: "translateY(-8px)" }}
                >
                    <Text fontSize="3xl" fontWeight="bold" color="teal.400">
                        {index + 1}
                    </Text>

                    <Text mt={4} fontSize="lg">
                        {step}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    );
}