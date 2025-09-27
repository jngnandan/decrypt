'use client';

import React, { useState, useContext } from 'react';
import { Card, Text, Button, Stack, Box, Select, TextInput, Checkbox, Container, Title, Breadcrumbs, Anchor } from '@mantine/core';
// import { DatePicker } from '@mantine/dates'; // Removed - dates package uninstalled
import { ContentContext } from '../../context/ContentContext';
import { useRouter } from "next/navigation";
import { IconChevronRight } from '@tabler/icons-react';
import { TableOfContents } from './TableOfContents'; // Adjust the import path as needed

function UserDetails() {
  const router = useRouter();
  const { setPaymentOptions } = useContext(ContentContext);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    contactNumber: '',
    chiefConcern: [],
  });

  const plans = [
    { name: 'Basic Consultation', duration: '30 minutes', price: 89 },
    { name: 'Digital Governance Session', duration: '30 minutes', price: 89 },
    { name: 'Network State Review', duration: '45 minutes', price: 119 },
    { name: 'Expert Consultation', duration: '60 minutes', price: 189 },
  ];

  const timeSlots = [
    { value: '07:30', label: '07:30 am' },
    { value: '08:30', label: '08:30 am' },
    { value: '09:30', label: '09:30 am' },
    { value: '10:30', label: '10:30 am' },
    { value: '11:30', label: '11:30 am' },
    { value: '12:30', label: '12:30 pm' },
  ];

  const concerns = [
    'Digital Governance', 'Network State Concepts', 'Blockchain Democracy',
    'Decentralized Systems', 'Digital Citizenship', 'Constitutional Framework',
    'Token Economics', 'Community Building', 'Policy Development',
    'Technology Integration', 'Legal Frameworks', 'Governance Protocols',
    'Social Coordination', 'Economic Models', 'Platform Development',
    'Regulatory Compliance', 'Digital Identity',
  ];

  const handleNext = () => setBookingStep(2);

  const handleSubmit = () => {
    const selectedPlanDetails = plans.find(plan => plan.name === selectedPlan);
    const newPaymentOption = {
      plan: selectedPlan,
      date: selectedDate,
      time: selectedTime,
      userInfo: userInfo,
      price: selectedPlanDetails?.price || 0,
    };
    setPaymentOptions(prevOptions => [...prevOptions, newPaymentOption]);
    router.push('/payment');
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/about' },
    { title: 'Booking', href: '/user-details' },
  ];

  return (
    <Container size="xl" className="mt-20">
      <Breadcrumbs separator={<IconChevronRight size={14} />} mb="xl">
        {breadcrumbItems.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>

      <Title order={2} mb="xl">Book Your Consultation Session</Title>

      <div className="flex space-x-10">
        {/* Left Column - Booking Form */}
        <Card className="flex-1" withBorder radius="md">
          {bookingStep === 1 ? (
            <Stack spacing="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Text size="lg" fw={600}>Select Date & Time</Text>
              </Card.Section>

              <Card.Section inheritPadding py="md">
                <Text className="text-sm text-gray-600 mb-4">Your consultation appointment will be scheduled</Text>
                <TextInput
                  type="date"
                  value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  min={new Date().toISOString().split('T')[0]}
                  fullWidth
                />
              </Card.Section>

              <Card.Section withBorder inheritPadding py="md">
                <Select
                  label="Time Zone"
                  placeholder="Europe/London - BST (+01:00)"
                  data={[{ value: 'Europe/London', label: 'Europe/London - BST (+01:00)' }]}
                />
                <Text weight={500} mt="md" mb="xs">Available Time Slots</Text>
                <div className="grid grid-cols-2 gap-4">
                  {timeSlots.map(slot => (
                    <Button
                      key={slot.value}
                      variant={selectedTime === slot.value ? 'filled' : 'outline'}
                      onClick={() => setSelectedTime(slot.value)}
                      fullWidth
                    >
                      {slot.label}
                    </Button>
                  ))}
                </div>
              </Card.Section>

              <Button fullWidth onClick={handleNext}>
                Next
              </Button>
            </Stack>
          ) : (
            <Stack spacing="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Text size="lg" fw={600}>Your Information</Text>
              </Card.Section>

              <Card.Section inheritPadding py="md">
                <Stack spacing="md">
                  <TextInput
                    label="Name"
                    placeholder="Your full name"
                    required
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  />
                  <TextInput
                    label="Email"
                    placeholder="your.email@example.com"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                  <TextInput
                    label="Contact Number"
                    placeholder="+91 1234567890"
                    required
                    icon={<span>🇮🇳</span>}
                    value={userInfo.contactNumber}
                    onChange={(e) => setUserInfo({ ...userInfo, contactNumber: e.target.value })}
                  />
                </Stack>
              </Card.Section>

              <Card.Section withBorder inheritPadding py="md">
                <Text weight={500} mb="xs">Chief Concern</Text>
                <Box sx={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {concerns.map(concern => (
                    <Checkbox
                      key={concern}
                      label={concern}
                      checked={userInfo.chiefConcern.includes(concern)}
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          setUserInfo({ ...userInfo, chiefConcern: [...userInfo.chiefConcern, concern] });
                        } else {
                          setUserInfo({
                            ...userInfo,
                            chiefConcern: userInfo.chiefConcern.filter(c => c !== concern)
                          });
                        }
                      }}
                      mb="xs"
                    />
                  ))}
                </Box>
              </Card.Section>

              <Checkbox
                label={
                  <Text size="sm">
                    I have read and agree to your{' '}
                    <Text component="span" color="blue" inherit>
                      Terms and Conditions
                    </Text>{' '}
                    and the{' '}
                    <Text component="span" color="blue" inherit>
                      Consent Agreement
                    </Text>
                    .
                  </Text>
                }
              />

              <Button fullWidth color="blue" onClick={handleSubmit}>
                Proceed to Payment
              </Button>
            </Stack>
          )}
        </Card>

        {/* Right Column - Table of Contents */}
        <div className="w-1/4">
          <TableOfContents />
        </div>
      </div>
    </Container>
  );
}

export default UserDetails;
