import { SimpleGrid } from "@chakra-ui/react";
import TemplateCard from "./TemplateCard";

export default function TemplateGrid({ data, onSelect }) {
    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={10}
            w="full"
        >
            {data.map((item, index) => (
                <TemplateCard key={index} template={item} onSelect={onSelect} />
            ))}
        </SimpleGrid>
    );
}