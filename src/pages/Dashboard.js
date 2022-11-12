import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";

import MockSection from "../components/MockSection";

function Dashboard() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Welcome Harsh 👋</h1>
						<Searchbar />
					</Flex>
					<MockSection />
				</Container>
			</Flex>
		</>
	);
}

export default Dashboard;
