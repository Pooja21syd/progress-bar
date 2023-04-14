import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProgressBar from "../components/progress-bar";

const Home: NextPage = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Head>
        <title>Progress Bar Demo</title>
        <meta name="description" content="Created By Pooja Sharma" />
      </Head>
      <Box>
        <Heading textAlign={"center"} as="h2" size="xl">
          Progress Bar Demo
        </Heading>
        <ProgressBar />
      </Box>
    </Flex>
  );
};

export default Home;
