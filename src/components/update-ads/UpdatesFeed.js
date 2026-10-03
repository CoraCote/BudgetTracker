'use client';

import { useMemo, useState } from 'react';
import UpdateCards, { updates, monthOf } from './UpdateCards';
import UpdateSidebar from './UpdateSidebar';

/**
 * Wires the sidebar search / category / archive filters to the update list.
 */
export default function UpdatesFeed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState(null);

  const categories = useMemo(() => {
    const counts = updates.reduce((acc, update) => {
      acc[update.category] = (acc[update.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { name: 'All', count: updates.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count })),
    ];
  }, []);

  const months = useMemo(
    () => Array.from(new Set(updates.map((update) => monthOf(update.date)))),
    []
  );

  const query = searchQuery.trim().toLowerCase();
  const visibleUpdates = updates.filter((update) => {
    if (selectedCategory !== 'All' && update.category !== selectedCategory) return false;
    if (selectedMonth && monthOf(update.date) !== selectedMonth) return false;
    if (query && !`${update.title} ${update.description} ${update.type}`.toLowerCase().includes(query)) return false;
    return true;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedMonth(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 order-2 lg:order-1">
        <UpdateCards items={visibleUpdates} onClearFilters={clearFilters} />
      </div>
      <div className="lg:col-span-1 order-1 lg:order-2">
        <UpdateSidebar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          months={months}
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
      </div>
    </div>
  );
}
