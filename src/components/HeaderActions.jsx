import React from 'react';
import { Link } from 'react-router-dom';
import SOSEmergencyButton from './SOSEmergencyButton';

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-4">
            <SOSEmergencyButton />
            <Link to="/patient-profile-records" className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20 hover:ring-primary/60 transition-all cursor-pointer block">
                <img alt="Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkgmfybpBn6Iy-ylh_6xIFgOF22NeqrvpHXqrseS_Jzi0wyBOz4dLkjz5h78OKKb_dyazLxFVP3IRiiNLUr65rlSBKpc-hz21AjRqU9kHq12wf2HH0p4gUZAHu23UOUHV1n4JgH7ppTBSeBoa3savSoO7_3gSYcwjaY_i0by0YOPA1zpWbaxzBkiNMBdBFORtn2upbLI4ifzBLiHcCBIIUnBVKas1228YYfh1Puf51i4ZW3Ddnvj0j1J0jEd4m1bunjm-54k3pDPc" />
            </Link>
        </div>
    );
};

export default HeaderActions;
