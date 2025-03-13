import React from 'react';

function SidebarToggleIcon({ onToggle }) {
  return (
    <div className="cursor-pointer p-2  mr-4" onClick={onToggle}>
<i class="ri-ancient-gate-line text-4xl transition-transform transform hover:scale-110 hover:text-blue-300"></i>
</div>
  );
}

export default SidebarToggleIcon;
