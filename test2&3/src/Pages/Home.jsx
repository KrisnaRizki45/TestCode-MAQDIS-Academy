import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, Button } from "@mui/material";
import { Users, Trophy, Calendar, TrendingUp, BookOpen, Clock, Play } from "lucide-react";

// Dummy data
const stats = [
  { title: "Total User", value: "50.050", subtitle: "Keseluruhan", color: "#FF9800", icon: Users },
  { title: "User Aktif Mingguan", value: "63.123", subtitle: "Tersedia", color: "#4CAF50", icon: TrendingUp },
  { title: "Total Dana Terkumpul / Tahun", value: "Rp17.144.000", subtitle: "Tahun 2025", color: "#2196F3", icon: Trophy },
];

const chartData = [
  { month: "Jan", users: 180, active: 120, new: 80 },
  { month: "Feb", users: 200, active: 140, new: 90 },
  { month: "Mar", users: 280, active: 200, new: 120 },
  { month: "Apr", users: 220, active: 160, new: 100 },
  { month: "May", users: 180, active: 130, new: 85 },
  { month: "Jun", users: 160, active: 110, new: 70 },
];

const maxValue = Math.max(...chartData.flatMap(d => [d.users, d.active, d.new]));

const Home = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF9800" }}>
          Dashboard Hamim
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Selamat datang, Admin!
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, bgcolor: stat.color, color: "white", p: 3, transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="subtitle2">{stat.title}</Typography>
                  <Typography variant="h5" fontWeight="bold">{stat.value}</Typography>
                  <Typography variant="body2">{stat.subtitle}</Typography>
                </Box>
                <Avatar sx={{ bgcolor: "white", color: stat.color }}>
                  <stat.icon />
                </Avatar>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chart */}
      <Card sx={{ borderRadius: 3, boxShadow: 3, p: 4, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Statistik User 6 Bulan Terakhir</Typography>
        <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
          {chartData.map((data, idx) => (
            <Box key={idx} sx={{ textAlign: "center", flex: "0 0 50px" }}>
              <Box sx={{ position: "relative", height: 150, display: "flex", alignItems: "flex-end", gap: "2px" }}>
                <Box sx={{ height: `${(data.users / maxValue) * 100}%`, width: "10px", bgcolor: "#2196F3", borderRadius: "4px" }}></Box>
                <Box sx={{ height: `${(data.active / maxValue) * 100}%`, width: "10px", bgcolor: "#FF9800", borderRadius: "4px" }}></Box>
                <Box sx={{ height: `${(data.new / maxValue) * 100}%`, width: "10px", bgcolor: "#4CAF50", borderRadius: "4px" }}></Box>
              </Box>
              <Typography variant="caption">{data.month}</Typography>
            </Box>
          ))}
        </Box>
      </Card>

      {/* Quick Actions */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3, bgcolor: "#FF9800", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "white", color: "#FF9800" }}><BookOpen /></Avatar>
              <Box>
                <Typography variant="subtitle2">Mulai Hafalan</Typography>
                <Typography variant="body2">Ayat Pilihan & Modul Hafalan</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3, bgcolor: "#4CAF50", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "white", color: "#4CAF50" }}><Play /></Avatar>
              <Box>
                <Typography variant="subtitle2">Ayat Pilihan</Typography>
                <Typography variant="body2">Mulai Sekarang (Free)</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3, bgcolor: "#2196F3", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "white", color: "#2196F3" }}><Clock /></Avatar>
              <Box>
                <Typography variant="subtitle2">Program Maghrib</Typography>
                <Typography variant="body2">Ikuti program harian & bonus</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
