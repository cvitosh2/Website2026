import {Box,FormControl, Heading, VStack,Input,Form, FormLabel,Button} from "@chakra-ui/react";


const Register = () => {
    return <Box
        w={{base: "90%", md: "400px"}}
        mt={10}
        p={8}
        borderRadius="lg"
        boxShadow="5pcx 5px 10px rgba(0,0,0,0.1)"
        Color="white"
        border="1px solid #e2e8f0"
        borderColor="gray.200"
        
        >
        {""}
        <Heading mb={6} textAlign="center" size="lg">
        Register
            </Heading>
        <Form>

            <VStack spacing={4}>
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Enter your username" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button colorScheme="blue" type="submit">
                    Register
                </Button>

            </VStack>
        </Form>
        </Box>


    
    };

    export default Register;