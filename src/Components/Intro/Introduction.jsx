import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box
} from "@chakra-ui/react";
import { useContext } from "react";
import ResumeContext from "../../Context/ResumeContext";
import ThemeTemplateData from "../../db/ThemeTemplateData";
import TemplateGrid from "./TemplateGrid";
import StepsList from "./StepsList";

export default function Introduction() {
    const {
        selectBtn,
        setSelectBtn,
        setCurrentTheme,
        showComponent,
        setShowComponent,
    } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    };

    const showTheme = (id) => {
        setShowComponent(!showComponent);
        setCurrentTheme(id);
    };

    return (
        <Container
            maxW="full"
            py={20}
            px={6}
            bgGradient="linear(to-br, #0f172a, #1e293b)"
            _light={{ bg: "gray.50" }}
        >
            {/* HERO */}
            <Stack textAlign="center" align="center" spacing={6} maxW="3xl" mx="auto">
                <Heading size="2xl">
                    Your resume in three{" "}
                    <Text as="span" color="teal.400">
                        easy
                    </Text>{" "}
                    steps
                </Heading>

                <Text color="gray.400" _light={{ color: "gray.600" }}>
                    Build a professional resume in minutes with beautiful templates.
                </Text>

                {selectBtn && (
                    <Button
                        size="lg"
                        colorScheme="teal"
                        borderRadius="full"
                        px={10}
                        onClick={handleSelectTemplate}
                    >
                        Select Template
                    </Button>
                )}
            </Stack>

            {/* STEPS */}
            {selectBtn && <StepsList />}

            {/* TEMPLATE GRID */}
            {!selectBtn && (
                <Box mt={16}>
                    <TemplateGrid
                        data={ThemeTemplateData}
                        onSelect={showTheme}
                    />
                </Box>
            )}
        </Container>
    );
}