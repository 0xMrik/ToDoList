import { Flex,Input,Button } from "@chakra-ui/react"
import { SmallAddIcon } from "@chakra-ui/icons"
import { AddTaskProps } from "@/types"

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateTask();
    }
  };

  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="2rem" >
      <Input
        placeholder="Nouvelle Tache..."
        size='lg'
        onChange={(e) => setTask(e.target.value)}
        value={task}
        style={{ 'background': '#fff' }}
        onKeyDown={handleKeyDown}
        variant="pill"
      />
        
      <Button
        size='lg'
        onClick={() => handleCreateTask()}>
            <SmallAddIcon />
        </Button>
    </Flex>
  )
}

export default AddTask