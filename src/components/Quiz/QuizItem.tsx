import React from "react"
import { Box, Flex, ListItem, Stack, Text } from "@chakra-ui/react"

import { GreenTickIcon } from "../icons/quiz"
import { QuizzesListItem } from "./QuizzesList"

import Button from "../Button"
import Translation from "../Translation"

// Raw quizzes data
import allQuizzesData from "../../data/quizzes"

const QuizItem = (props: QuizzesListItem) => {
  const { title, id, level, next, quizHandler, nextHandler, modalHandler } =
    props
  const numberOfQuestions = allQuizzesData[id].questions.length

  return (
    <Flex
      justifyContent="space-between"
      alignItems={{ base: "flex-start", lg: "center" }}
      direction={{ base: "column", lg: "row" }}
      px={{ base: 0, lg: 4 }}
      py={4}
      color="text"
      borderBottom="1px solid"
      borderColor="gray.300"
      _first={{ borderTopRadius: "sm" }}
      _last={{ borderBottomRadius: "sm" }}
    >
      <Stack ml={4} mb={{ base: 5, lg: 0 }}>
        <Flex gap={2} alignItems="center">
          <ListItem fontWeight="bold" mb={0}>
            <Text fontWeight="bold">{title}</Text>
          </ListItem>

          {/* TODO: hide green tick if not passed */}
          <GreenTickIcon />
        </Flex>

        {/* Labels */}
        <Flex gap={3}>
          {/* number of questions - label */}
          <Text
            fontWeight="light"
            fontSize="xs"
            bg="ednBackground"
            borderRadius="full"
            border="none"
            casing="uppercase"
            px={2}
            py={1}
            ml={-6}
            mb={0}
          >
            {numberOfQuestions} {<Translation id="questions" />}
          </Text>

          {/* difficulty - label */}
          <Text
            fontWeight="light"
            fontSize="xs"
            bg="ednBackground"
            borderRadius="full"
            border="none"
            px={2}
            py={1}
            mb={0}
          >
            {level.toUpperCase()}
          </Text>
        </Flex>
      </Stack>

      {/* Start Button */}
      <Box w={{ base: "full", lg: "auto" }}>
        <Button
          variant="outline-color"
          w={{ base: "full", lg: "auto" }}
          onClick={() => {
            quizHandler(id)
            nextHandler(next)
            modalHandler(true)
          }}
        >
          <Translation id="start" />
        </Button>
      </Box>
    </Flex>
  )
}

export default QuizItem