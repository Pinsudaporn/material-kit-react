import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Budget } from "./budget"; // import component Budget ที่คุณให้มา
import { TotalCustomers } from "./total-customers";

export default function ResumePage() {
	return (
		<Box
			sx={{
				maxWidth: 1000,
				margin: "2rem auto",
				padding: 3,
				boxShadow: 3,
				borderRadius: 2,
				backgroundColor: "#fff",
				fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
			}}
		>
			{/* Header */}
			<Stack direction="row" spacing={2} alignItems="center" mb={3}>
				<Avatar sx={{ width: 100, height: 100 }} src="/assets/pinpic.jpg" alt="รูปภาพ" />
				<Box>
					<Typography variant="h4" component="h1">
						Pinsudaporn Yotsan
					</Typography>
					<Typography color="text.secondary">Front-End Developer</Typography>
					<Typography color="text.secondary" variant="body2">
						Email: pinsudaporn123@gmail.com | Tel: 061-031-6986
					</Typography>
				</Box>
			</Stack>

			{/* Summary */}
			<Typography variant="h6" gutterBottom>
				<strong>Professional Summary</strong>
			</Typography>
			<Typography paragraph>
				Detail-oriented Front-end Web Developer with 2 years of experience developing and maintaining responsive web
				applications in the healthcare domain. Skilled in building modern, user-friendly interfaces for Hospital
				Information Systems (HIS), including modules for electronic medical records (EMR), appointment scheduling, and
				pharmacy systems. Familiar with writing SQL queries to support dynamic data rendering and reporting. Eager to
				contribute clean code and intuitive UI design to improve clinical workflows.
			</Typography>

			{/* tech */}
			<Typography variant="h6" gutterBottom>
				<strong>Technical Skills</strong>
			</Typography>
			<Typography paragraph>
				<li>Front-End: Java, Java scripts, React, React Typescript, Vite, HTML, CSS, BootStap, bun</li>
				<li>Back-End: C, C++, PHP, node.js</li>
				<li>Database: SQL Server MSS, My Sql - SELECT, JOIN, filters</li>
				<li>Tools: Gitlab, Github, VS Code, Postman, Figma, Swagger, Azure DevOps</li>
				<li>Other: Stimulsoft Report, heidiSql</li>
			</Typography>

			{/* WorkExperience */}
			<Typography variant="h6" gutterBottom mt={4}>
				<strong>Professional Experience</strong>
			</Typography>

			<Box component="ul" sx={{ pl: 2 }}>
				<li>
					<Typography>
						<strong>Front-End Developer</strong> - Top Provider System Group Co., Ltd.
					</Typography>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							ml: 2,
							mt: 1,
							mb: 1,
						}}
					>
						<Typography variant="body2" color="text.secondary">
							Hospital Information System (HIS) and Back-Office Hospital Project
						</Typography>
						<Typography variant="body2" color="text.secondary">
							2023 - PRESENT
						</Typography>
					</Box>

					{/* HIS Section */}
					<Box component="ul" sx={{ pl: 2, mb: 2 }}>
						<li>
							<Typography fontWeight="bold">Hospital Information System (HIS)</Typography>
							<Box component="ul" sx={{ pl: 2, pt: 1 }}>
								<li>
									<Typography>
										Collaborated closely with UI/UX designers and backend developers to deliver a clean and efficient
										user experience for hospital staff.
									</Typography>
								</li>
								<li>
									<Typography>
										Developed the HIS frontend using Ant Design (antd), delivering a seamless and intuitive user
										interface for healthcare staff.
									</Typography>
								</li>
								<li>
									<Typography>
										Designed and developed responsive web interfaces for key HIS modules including EMR, outpatient
										registration, and appointment scheduling.
									</Typography>
								</li>
								<li>
									<Typography>
										Collaborated with backend developers to define API contracts and troubleshoot data rendering issues.
									</Typography>
								</li>
								<li>
									<Typography>
										Designed responsive UI for multi-device access including hospital desktops and tablets.
									</Typography>
								</li>
								<li>
									<Typography>
										Used Stimulsoft Reports for generating customized medical, financial, and operational reports.
									</Typography>
								</li>
								<li>
									<Typography>
										Managed state effectively using Redux and React Context to enhance application maintainability.
									</Typography>
								</li>
								<li>
									<Typography>
										Developed report pages with export-to-PDF and Excel functionality using React + third-party
										libraries (e.g., jspdf, xlsx). Enabled admins to generate structured reports for patients, billing,
										and inventory with responsive table views and filters.
									</Typography>
								</li>
							</Box>
						</li>

						{/* Back-Office Section */}
						<li style={{ marginTop: "1.5rem" }}>
							<Typography fontWeight="bold">Back-Office Hospital System</Typography>
							<Box component="ul" sx={{ pl: 2, pt: 1 }}>
								<li>
									<Typography>
										Developed modules for HR and Payroll management using Material-UI (MUI) and .NET C# on the backend.
									</Typography>
								</li>
								<li>
									<Typography>
										Created secure user and role management UI using React Context for handling permissions and React
										Forms for account input and validation. Allowed admins to assign role-based access and manage system
										users efficiently with clear UI feedback.
									</Typography>
								</li>
								<li>
									<Typography>
										Integrated Power BI dashboards to provide real-time analytics and insights into hospital performance
										and workforce management.
									</Typography>
								</li>
							</Box>
						</li>
					</Box>
				</li>
			</Box>
			<Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="space-between">
				{/* Left - Education (70%) */}
				<Box sx={{ flex: 7 }}>
					<Typography variant="h6" gutterBottom>
						<strong>Education</strong>
					</Typography>
					<Budget sx={{ width: "100%" }} />
				</Box>

				{/* Right - Language (30%) */}
				<Box sx={{ flex: 3 }}>
					<Typography variant="h6" gutterBottom>
						<strong>Language</strong>
					</Typography>
					<TotalCustomers sx={{ width: "100%" }} />
				</Box>
			</Stack>
		</Box>
	);
}
