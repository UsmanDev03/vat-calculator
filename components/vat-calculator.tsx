'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Plus, Trash2 } from 'lucide-react';

interface VATRate {
  id: string;
  name: string;
  percentage: number;
  isCustom: boolean;
}

interface VATLine {
  id: string;
  description: string;
  amount: number;
  rateId: string;
}

const DEFAULT_RATES: VATRate[] = [
  { id: 'standard', name: 'Standard Rate', percentage: 17.5, isCustom: false },
  { id: 'reduced', name: 'Reduced Rate', percentage: 5, isCustom: false },
  { id: 'zero', name: 'Zero Rate', percentage: 0, isCustom: false },
];

export default function VATCalculator() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [rates, setRates] = useState<VATRate[]>(DEFAULT_RATES);
  const [lines, setLines] = useState<VATLine[]>([]);
  const [customRateValue, setCustomRateValue] = useState('');
  const [customRateName, setCustomRateName] = useState('');

  const addCustomRate = useCallback(() => {
    if (!customRateValue || isNaN(parseFloat(customRateValue))) return;
    const newRate: VATRate = {
      id: `custom-${Date.now()}`,
      name: customRateName || `Custom ${customRateValue}%`,
      percentage: parseFloat(customRateValue),
      isCustom: true,
    };
    setRates([...rates, newRate]);
    setCustomRateValue('');
    setCustomRateName('');
  }, [customRateValue, customRateName, rates]);

  const removeCustomRate = (id: string) => {
    setRates(rates.filter((r) => r.id !== id));
    setLines(lines.filter((l) => l.rateId !== id));
  };

  const addLine = () => {
    setLines([
      ...lines,
      {
        id: `line-${Date.now()}`,
        description: '',
        amount: 0,
        rateId: 'standard',
      },
    ]);
  };

  const updateLine = (id: string, updates: Partial<VATLine>) => {
    setLines(
      lines.map((line) =>
        line.id === id
          ? {
              ...line,
              amount: 'amount' in updates ? Math.round(updates.amount! * 100) / 100 : line.amount,
              ...updates,
            }
          : line
      )
    );
  };

  const removeLine = (id: string) => {
    setLines(lines.filter((line) => line.id !== id));
  };

  const calculateForLine = (amount: number, ratePercentage: number) => {
    if (mode === 'add') {
      const vatAmount = amount * (ratePercentage / 100);
      const total = amount + vatAmount;
      return {
        original: amount,
        vat: Math.round(vatAmount * 100) / 100,
        total: Math.round(total * 100) / 100,
      };
    } else {
      const netAmount = amount / (1 + ratePercentage / 100);
      const vatAmount = amount - netAmount;
      return {
        original: Math.round(netAmount * 100) / 100,
        vat: Math.round(vatAmount * 100) / 100,
        total: amount,
      };
    }
  };

  const calculateTotals = () => {
    let totalNet = 0;
    let totalVAT = 0;
    let totalGross = 0;

    lines.forEach((line) => {
      const rate = rates.find((r) => r.id === line.rateId);
      if (rate) {
        const calc = calculateForLine(line.amount, rate.percentage);
        totalNet += calc.original;
        totalVAT += calc.vat;
        totalGross += calc.total;
      }
    });

    return {
      net: Math.round(totalNet * 100) / 100,
      vat: Math.round(totalVAT * 100) / 100,
      gross: Math.round(totalGross * 100) / 100,
    };
  };

  const totals = calculateTotals();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getSelectedRate = (rateId: string) => rates.find((r) => r.id === rateId);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>UK VAT Calculator</CardTitle>
          <CardDescription>Calculate VAT for your items or invoices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mode Selection */}
          <Tabs value={mode} onValueChange={(v) => setMode(v as 'add' | 'remove')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="add">Add VAT</TabsTrigger>
              <TabsTrigger value="remove">Remove VAT</TabsTrigger>
            </TabsList>

            <TabsContent value="add" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter the price excluding VAT and calculate the total with VAT included
              </p>
            </TabsContent>

            <TabsContent value="remove" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter the price including VAT and calculate the net amount and VAT portion
              </p>
            </TabsContent>
          </Tabs>

          {/* VAT Rates Management */}
          <div className="space-y-4 border-t pt-6">
            <div className="space-y-3">
              <Label className="text-base font-semibold">VAT Rates</Label>
              <div className="grid gap-2">
                {rates.map((rate) => (
                  <div
                    key={rate.id}
                    className="flex items-center justify-between p-3 bg-card rounded-lg border border-border"
                  >
                    <div>
                      <p className="font-medium">{rate.name}</p>
                      <p className="text-sm text-muted-foreground">{rate.percentage}%</p>
                    </div>
                    {rate.isCustom && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCustomRate(rate.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Add Custom Rate */}
            <div className="space-y-3 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium">Add Custom Rate</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Rate name (optional)"
                  value={customRateName}
                  onChange={(e) => setCustomRateName(e.target.value)}
                  className="flex-1"
                />
                <Input
                  type="number"
                  placeholder="Rate %"
                  value={customRateValue}
                  onChange={(e) => setCustomRateValue(e.target.value)}
                  step="0.01"
                  min="0"
                  className="w-24"
                />
                <Button onClick={addCustomRate} variant="default">
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Items/Lines */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Items</Label>
              <Button onClick={addLine} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>

            {lines.length === 0 ? (
              <div className="p-8 bg-muted rounded-lg text-center">
                <p className="text-muted-foreground">No items added yet. Click "Add Item" to get started.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {lines.map((line) => {
                  const rate = getSelectedRate(line.rateId);
                  const calc = rate ? calculateForLine(line.amount, rate.percentage) : null;

                  return (
                    <div key={line.id} className="space-y-3 p-4 bg-card rounded-lg border border-border">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs">Description</Label>
                          <Input
                            placeholder="Item description (optional)"
                            value={line.description}
                            onChange={(e) => updateLine(line.id, { description: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Amount</Label>
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={line.amount || ''}
                            onChange={(e) => updateLine(line.id, { amount: parseFloat(e.target.value) || 0 })}
                            step="0.01"
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="flex items-end gap-3">
                        <div className="flex-1">
                          <Label className="text-xs">VAT Rate</Label>
                          <select
                            value={line.rateId}
                            onChange={(e) => updateLine(line.id, { rateId: e.target.value })}
                            className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
                          >
                            {rates.map((rate) => (
                              <option key={rate.id} value={rate.id}>
                                {rate.name} ({rate.percentage}%)
                              </option>
                            ))}
                          </select>
                        </div>

                        {calc && (
                          <div className="flex-1 space-y-1 text-right">
                            <p className="text-xs text-muted-foreground">
                              {mode === 'add' ? 'Price + VAT' : 'Net Price'}
                            </p>
                            <p className="text-lg font-semibold">
                              £{mode === 'add' ? calc.total : calc.original}
                            </p>
                          </div>
                        )}

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLine(line.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Results Summary */}
          {lines.length > 0 && (
            <div className="space-y-4 border-t pt-6">
              <Label className="text-base font-semibold">Summary</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-muted">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">Net Amount</p>
                    <p className="text-2xl font-bold">£{totals.net}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => copyToClipboard(totals.net.toString())}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10 border-accent">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">VAT Amount</p>
                    <p className="text-2xl font-bold text-accent">£{totals.vat}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => copyToClipboard(totals.vat.toString())}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">Total</p>
                    <p className="text-2xl font-bold text-primary">£{totals.gross}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => copyToClipboard(totals.gross.toString())}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
